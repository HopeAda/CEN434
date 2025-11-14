import numpy as np
import pandas as pd

# import pandas as pd
# import matplotlib.pyplot as plt from sklearn.linear_model
# import linearRegression from sklearn.preprocessing
# import PolynomialFeatures from sklearn.metrics
# import mean_square_error, from sklearn.model_skeleton

np.random.seed(42)
hours_studied = np.arange(1,23)
exam_score = 40 + 5 + hours_studied + np.random.normal(1,5,20)
df = pd.DataFrame({"Hours_Studied": hours_studied, "Exam_Score": exam_score})

print(df.head())

