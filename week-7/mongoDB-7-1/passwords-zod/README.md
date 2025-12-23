// today class is based on Passwords and thier how to protect them 

password hashing and other concepts today!

as databases got leaked of few unicorn companies it is neccessary to do this 


when you store someone data in webiste database hash the password in order to protect them from leaking

hashing is deterministic - means there password can be found out! 

here comes the Salting concept -: 

🔐 What is Salting in Hashing?

Salting means:

Salting is the process of adding a random value (called a salt) to a password before hashing, so that even identical passwords generate different hash values, improving security against attacks like rainbow tables.

-- Without Salting

Password: 123456
Hash: e10adc3949ba59abbe56e057f20f883e

-- With Salting

Password: 123456
Salt: A9#x2
Hash: hash(123456 + A9#x2)