# StrykerInfiniteLoopDemoProject
Creating this repository to demonstrate to the Stryker team a possible bug that i've encountered in my projects. I just basically cloned one of the angular seed projects, added stryker, and
added a dummy service to reproduce the infinite loop -> causes Karma to disconnect. 

Run stryker with the project as-is to see the bug in action - stryker seems to choke on 33% and then reports the remaining mutations as survived.
I haven't been able to reproduce the issue with more than 1 concurrent test runner.. i'm thinking maybe it has to do with the overall number of mutations
(more generated mutants = more likely to see the infinite loop causing karma to disconnect?)

Comment out lines 9-13, 37 from app/js/dummy_service.js and lines 16-24 from test/unit/dummy_service.spec.js to see the other generated mutants being killed successfully.