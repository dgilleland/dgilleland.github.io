---
title: Gradebook Systems
summary: A comparison between Weighted and Point distributions approaches to grading.
date: May 10 2024
tags:
  - Teaching
---
# Picking a Grading System

We've recently adopted a new LMS at the school that we I work at, and I'm getting familiar with how to set up the gradebook. Our course outlines advertise the mark breakdown for each assignment as a weighted distribution, but I ran across a course that had its gradebook set up as a point distribution. It was there as a "port" from our previous LMS, but it got me writing up notes on the effects of mixing up the two systems.

> Fair warning: This post contains math (so grab a coffee and close the door).

## The Problem

For as long as I can remember, we've been "advertising" our grades and mark breakdown to our students as a "weighted distribution". That's also the way we are required to enter it in our school's Academic Tools system where we create/manage official course outlines. That way, students can do "simple math" to figure out their grade.

For example, if a student has an assignment their mark is 18 out of a possible 20, then their mark for that assignment is `18/20 = 90%`. If that assignment is worth 15% of their final grade, then they have just earned 13.5% (`90 * .15 = 13.5`). Weighted grading systems make the calculations pretty straight forward. It keeps the *points* (earned vs. possible) separate from the *mark* (percentage).

That's handy for us as instructors. When we get into the nitty-gritty of building a single assignment, we try to determine a "granularity" of the various requirements that give a fair representation of all the work that they do. (Our assignments are coding projects, so there's a lot of working details the students need to get right.) In the process, it's common for us to say "This part is easy, let's make it 2 marks" and "This part is harder, let's make it 10 marks." In the end, we add up the total (say 23 marks) and use that along with our item-by-item breakdown as a loose rubric. It gives an internal "scale" for all the requirements so that students can see if they've got enough working to get a pass.

Changing these possible marks makes no difference in a weighted marking scheme for the effect of that individual assignment. But in a Points distribution, it's effects can be dramatic. Let's look at some examples.

## Weighted Distribution Example

Total Points are irrelevant in a weighted distribution. Imagine we start with the following at the beginning of the course (with a sample student response that gives them a 50% pass mark):

| Item | Weight  | Earned | Points | Mark | Distribution |
| :--: | --- | --- | --- | --- | -- |
|   A  | 25 | 25 | 50 | 50% | *25%* |
|   B  | 25 | **50** | **100** | 50% | *25%* |
|   C  | 25 | 30 |  60 | 50% | *25%* |
|   D  | 25 | **10** |  **20**  | 50% | *25%* |

If at any time we decide to change the possible marks for an assignment, we can do so without affecting the overall grade.

| Item | Weight  | Earned | Points | Mark | Distribution |
| :--: | --- | --- | --- | --- |  --- |
|  A   | 25 | 25 | 50 | 50% | *25%* |
| *B*  | 25 | **100** | **200** | 50% | *25%* |
|  C   | 25 | 30 | 60 | 50% | *25%* |
| *D*  | 25 | **5** |  **10**  | 50% | *25%* |


## Point Distribution

In a Point distribution, the possible points on any given assignment become essential to how heavily it contributes to the student's final grade. In this sample, the total points of all assignments is 230.

| Item | Earned | Points | Mark | Distribution  |
| ---  | --- | --- | --- | --- |
|   A  | 25 | 50 | 50% | (25/230) = 10.8% |
|   B  | **50** | **100** | 50% | (100/230) = 43.4% |
|   C  | 30 |  60 | 50% | (60/230) = 26.1% |
|   D  | **10** |  **20**  | 50% | (20/30) = 8.7% |

But, if an instructor decides to change the possible points for an assignment (perhaps because they want a finer or rougher distinction in the assignment's requirements), then the total points of all assignments will change. Here, an instructor took assignment **B** and doubled the points it was marked out of and also changed assignment **D** to have half the total possible points a student could earn.

| Item | Earned | Points | Mark | Distribution  |
| ---  | --- | --- | --- | --- |
|   A  | 25 | 50 | 50% | (50/320) = 15.6% |
|  *B* | **100** | **200** | 50% | (200/320) = **62.5%** |
|   C  | 30 |  60 | 50% | (60/320) = 18.75% |
|  *D* | **5** |  **10**  | 50% | (10/320) = **3.1%** |

The instructor's *intent* wasn't to change the weight distribution of the assignments. Maybe they simply needed an alternate lab for the current sememster to make it different from the previous one. The lab's internal breakdown or "scale" was different, and in the instructor's mind they might assume the point change has no effect. After all, getting `50/100` is the same as getting `100/200`: 50% on the assignment.

But, that's not what *really* happens. This "arbitrary" change by the instructor on the "details" of an assignment results in a marked increase or decrease of the *effective distribution* of marks. Yes, the overall grade in both is 50% (I made the math that way on purpose, for simplicity and as a "control point" in my analysis). But in a "real" situation, where student grades are affected by so many factors, this could have pass/fail ramifications. And it can create a mess to sort out because the awarded marks have to all be re-scaled in order to restore the original distribution.


## Conclusion/Summary

Now, I don't have any formal education/training on distribution schemes, rubric planning, etc. In many trade schools and polytechnical institutions, you might only need a diploma or trade certificate in order to teach. Not every instructor has a degree in Education. So this as a potential "trap" that we could fall into if we aren't aware. This is especially true for instructors who may have only seen weighted marking systems when they were students.

I know that I get so caught up in the details when building an assignment that I can forget about any effect of messing with the total points in that assignment. Because I'm used to the weighted system, I feel comfortable playing fast and loose with the total points, and adjusting those makes it easy to "balance" my rubric.

So, if you are in a situation where you need to choose a gradebook system, consider the following:

- A **Weighted** distribution/scheme is best where there is *high fluidity* and *change* in the details of assignments from term-to-term.
  - This is particularly suited to courses where content is affected by ever-changing advancements in technology like computer programming. We can "mess around" with the points without affecting the outcome or distribution. It's also highly suitable for lab assignments, because those can vary quite widely in terms of difficulty and the number of required steps or details that the student needs to complete.
- A **Point** distribution/scheme is acceptable when there is *low entropy* and *stability* in the content of assignments.
  - If you know you won't ever have to change the total points for the assignment, then you're good to go. You can "set and forget" and let the LMS do all the math for you. Quizzes are an easy example of this, especially when we simply set the "points" as the number of questions pulled from the quiz bank.


Whew!

If you actually made it this far, I congratulate you and my esteem of you has grown! Thanks for reading!
