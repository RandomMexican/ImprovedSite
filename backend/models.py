from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.association_proxy import association_proxy
from config import db


class Project(db,Model,SerializerMixin):
    __tablename__ = "Projects"

    id = db.Column(db.Integer, primary_key=True)
    PName = db.Column(db.String, unique = True)
    desc = db.Column(db.String,unique = True, nullable = False)

    # Create relationship that links a Project to an image
    # NOTE: this needs to be closed back to the project PI relationship
    PI = db.relationship("PI", back_populates = "project")

    # creates and association proxy from the project-PI relationship to the image-PI
    image = association_proxy("PI","img")

    # creates serialization rules to avoid cascading when accessing project data from the PI
    serialize_rules = ("-PI.project",)

class image(db.Model,SerializerMixin):
    __tablename__="ProjectIMG"

    id = db.Column(db.Integer, primary_key=True)
    IMGname = db.Column(db.String, unique=True, nullable = False)
    link = db.Column(db.String, unique = True, nullable = False)

    # Create relationship that links a Project to an image
    # NOTE: this needs to be clsoed back to the project PI relationship
    PI = db.relationship("PI", back_populates="image")

    # creates serialization ruels to avoid cascading when accessing image data from the PI
    serialize_rules = ("-PI.image")

class PI(db.Model,SerializerMixin):
    __tablename__ = "PI"

    id = db.Column(db.Integer, primary_key=True)
    projectID = db.Column(db.Integer, db.ForeignKey("Project.id"))
    imageID = db.Column(db.Integer, db.ForeignKey("Image.id"))

    # extend relationship to link from PI row to project row 
    # NOTE: needs to be closed from the project-PI relationship
    project = db.relationship("project", back_populates='PI')

    # extend relationship to link from PI row to image row
    # NOTE: needs to be clseod from the image-PI relationship
    image = db.relationship("image", back_populates="PI")

    # creates rules to avoid cascading when accessing PI data from project or image
    serialzie_rules = ("-project.PI","-image.PI")