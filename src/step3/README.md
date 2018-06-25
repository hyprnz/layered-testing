# Test what you change

## Step three

We have introduced DateTime.ts to encapsulate pure date functions. 

We have also now introduced the PlanndedStartMaker class which encapsulate the making of a planned start object based on
logic. 

We have been able to use dependency injection within the legacy calculator to control the creation 
of the object. This also allows us to use mocks within the legcy calculator to simplify testing.
Have a look at the tests in the LegacyCalculator in step 3 and see if you can understand how the mock
works.

Try and replicate the mock tests using a fake object instead. 

When would you use a fake vs. a mock as a test double?


### Advanced:
Write the missing micro tests for minDateAsTime in DateTime.ts.

How would you introduce a new type of planned start maker? 
Try and introduce a NoopPlannedStartmaker that always returns ```{startTime: 0, count: 0}```
from the factory when the dates array contains 2018-01-01:00:00:00.


 