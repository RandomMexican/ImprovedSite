from models import Project,image,PI
from config import db,app
from random import choice

def createProject():

    project1= (Project(PName= "GoofyRacers",desc="Racing Game made with Ursina and Ursina Networking"))
    project2= (Project(PName= "NeonTails",desc="Online art gallery for cat, dog, and cyberpunk related images"))
    project3= (Project(PName= "Simulation Project",desc="A couple of simulations I made using python"))

    return[project1,project2,project3]

def create_Images():
    image1 = (image(IMGname= "GoofyRacersIMG",link="randomwords"))
    image2 = (image(IMGname= "NeonTailsIMG",link="forNEON"))
    image3 = (image(IMGname= "SimulationsIMG",link="FORSIMS"))

def createPI():
    pass