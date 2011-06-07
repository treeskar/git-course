<div class="title-icon" style="background-image: url(/course/assets/icons/edit.svg)"></div>
## Rewriting History

* <div>Amend changes to **last commit**</div> <!-- .element: class="fragment fade-up" -->
* Reset <!-- .element: class="fragment fade-up" -->
* Interactive rebase <!-- .element: class="fragment fade-up" -->
* <div>filter-branch - rewrite history for **larger number** of commits</div> <!-- .element: class="fragment fade-up" -->

Note:
Will confuse other developers by providing an alternate version of the same change


<div class="title-icon" style="background-image: url(/course/assets/icons/danger.svg)"></div>
### Dangers of rewriting History

Internally, rewriting history **doesn't** actually **change/move** commits. **Instead**, it **creates new commits**, that contain the desired changes.


<div class="head-image">
    <span style="background-image: url(/course/assets/memo/fire.gif); width: 400px; height: 186px; background-position: 0 -19px;"></span>
</div>

You should **never rebase** commits, that have been **pushed** to a public repository **unless** you're positive, that **nobody** has **based** their work off **of them**.

Note:
```
// examples/diverged-history
```