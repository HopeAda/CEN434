# import numpy as np
# import pandas as pd



# import pandas as pd
# import LinearRegression from sklearn.preprocessing
# import PolynomialFeatures from sklearn.metrics
# import mean_square_error, from sklearn.model_skeleton

# np.random.seed(42)
# hours_studied = np.arange(1,23)
# exam_score = 40 + 5 + hours_studied + np.random.normal(1,5,20)
# df = pd.DataFrame({"Hours_Studied": hours_studied, "Exam_Score": exam_score})

# print(df.head())



# df.to_csv("data.csv", index=False)
# print("Dataset saved as 'data.csv")




import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
np.random.seed(42)
hours_studied = np.arange(1,21)
exam_score = 40 + 5*hours_studied + np.random.normal(0,5,20)
df = pd.DataFrame({'Hours_studied': hours_studied, 'Exam_Score': exam_score})
print(df.head())
df.to_csv('data.csv',index=False)
print("Dataset saved as 'data.csv'")
df = pd.read_csv('data.csv')
print(f"Dataset shape: {df.shape}")
print(f"Columns: {df.columns.tolist()}")
plt.figure(figsize = (10,6))
plt.scatter(df['Hours_studied'], df['Exam_Score'], color='blue',alpha=0.6, s=100)
plt.xlabel('Hours_studied', fontsize=12)
plt.ylabel('Exam_Score', fontsize=12)
plt.title('Exam_Score vs. Hours_Studied', fontsize=14)
plt.grid(True, alpha=0.3)
plt.show()