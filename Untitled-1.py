# %%
import pyspark as ps
from pyspark.sql import SparkSession
import pandas as pd
import numpy as np


# %%
species = pd.read_csv('species.csv')


# %%
print(species.head())

# %%
# change title for for first cell
species.rename(columns = {'Unnamed: 0':'species_id'}, inplace = True)

# %%
#print first row of species
print(species.head(1))

# %%
#number of rows

print(species.shape)

# %%
#identify unique threats 
print(species.Threats.unique())

# %%
# remove nans from 

# %%
# divide threats into a list 
species['Threats'] = species.Threats.str.split(',')

# remove spaces and make all lowercase
species['Threats'] = species['Threats'].apply(lambda x: [y.strip().lower() for y in x])

species['Threats']


