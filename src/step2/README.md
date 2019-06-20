# Test what you change

## Step two 

Try introducing a DateTime.ts file with the new pure function. Create a DateTime.micro.ts file for micro tests.
Hint - you can copy the structure from the LegacyCalculator.micro.ts.

All tests will be automatically picked up when you run:

```npm run test```

Or you can run micro tests for a single step

```npm run test:micro-step-2```

Try writing some micro tests for the new function. Hint - if you look in step 3 you will see some tests you can reference
but see how far you can get first! 

Once you have tests in place, replace the duplicate logic in LegacyCalculator with the same function.

Now write some tests to understand what (7 * 24 * 60 * 60 * 1000) means. Introduce a constant to replace all instances.
Where should the new constant live? What is a good name for it?

### Advanced:
Try encapsulating the remaining logic into another class that makes a PlannedStart. Write some tests to clarify your
understanding of how it works before you refactor.