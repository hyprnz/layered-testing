# Layered Testing Workshop

This workshop requires [node.js](https://nodejs.org/en/download/).

Once node is installed you should be able to run 

```npm install --no-optional```

to install required packages for running tests.

You can then run tests using

```npm run gulp tests```

You should then see an output telling you the tests have passed:

```[14:06:37] Starting 'clean'...
   [14:06:37] Finished 'clean' after 10 ms
   [14:06:37] Starting 'compile'...
   [14:06:38] Finished 'compile' after 1.34 s
   [14:06:38] Starting 'tests'...
   
   
     LegacyCalculator
       calculate
         ✓ empty
         ✓ with one date
         ✓ with many dates
   
     LegacyCalculator
       calculate
         ✓ empty
         ✓ with one date
         ✓ with many dates
   
     WeekCounter
       oneWeek
         ✓ one week later
       withinOneWeekFromStart
         ✓ no dates
         ✓ same date
         ✓ just after now
         ✓ exactly one week later
         ✓ more than one week later
         ✓ with many dates
   
     LegacyCalculator integration
       calculate
         ✓ empty
         ✓ with one date
         ✓ with many dates
   
     LegacyCalculator mock example
       calculate
         ✓ make
   
     PlannedStartMaker
       make
         ✓ empty
         ✓ with one valid date in second week
       count
         ✓ empty
         ✓ with one valid date in second week
         ✓ with one valid date in first and second week
   
   
     22 passing (24ms)```
