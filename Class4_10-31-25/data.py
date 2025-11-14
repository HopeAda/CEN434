import numpy as np

arr1 = np.array([1,2,3,4,5,5,3,6,7,2,2,3,3,4,4])
arr2 = np.array([6,7,8,9])

zeros = np.zeros((2,3))
ones = np.ones((3,4))
Empty = np.empty((2,3))
arrange = np.arange(0,10,2)
linspance = np.linspace(0,1,5)


# Note the values of these numpy methods: 

# zeros = [[0. 0. 0.]
#  [0. 0. 0.]]
 
#  ones = [[1. 1. 1. 1.]
#  [1. 1. 1. 1.]
#  [1. 1. 1. 1.]]
 
 
#  empty = [[1.e-323 0.e+000 0.e+000]
#  [0.e+000 0.e+000 0.e+000]]
 
 
#  arange = [0 2 4 6 8]
 
#  linspance = [0.   0.25 0.5  0.75 1.  ]


# Random arrays

random_arr = np.random.rand(3,3)
normal_arr = np.random.randn(3,3)
randint_arr = np.random.randint(0, 10,(3,3))





# random_arr = [[0.14669719 0.4718645  0.60517201]
#  [0.24055956 0.00925544 0.44147763]
#  [0.14098763 0.40729924 0.48214761]]
# This is not realistic in real world applications, because it plots as a linear graph

# normal_arr = [[ 1.2086543   0.0829812  -1.11101476]
#  [ 1.08875526  0.28451229  0.64793706]
#  [ 0.04714929 -0.77920203  1.75694293]]
# This is more realistic, plots as a curve cause it has -ve values. Tends towards zero than 1


# randint_arr= [[9 6 8]
#  [3 4 1]
#  [1 7 5]]
# Gives random values between 0 and 10 in a 3 by 3 matrix




# Check for special arrays as well





arr3 = np.array([[1,2,3], [4,5,6], [7,8,9]])


# print(arr3.shape)
# print(arr3.ndim)
# print(arr3.dtype)
# print(arr3.size)


# The values respectively are: 
# (3, 3)
# 2
# int64
# 9


# Numpy can be used for vectorized operations.
# You can find mean, median, standard deviation, variance. There is no mode though
# Find how to use square root, and the rest



print(np.mean(arr1))
print(np.median(arr1))
print(np.std(arr1))
