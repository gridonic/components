![Gridonic Components](./media/logo.png)<br><br><br>

# DRY

Don’t repeat yourself.

This is our components library. It mostly consists of [Sass](https://sass-lang.com/) [mixins](https://sass-lang.com/documentation/at-rules/mixin), [Vue](https://vuejs.org/) components and [Twig](https://twig.symfony.com/) [partials](https://twig.symfony.com/doc/2.x/tags/include.html). They all are built with best practices in mind and common features we usually have to implement, but in a way we can adapt and customize them. 

Sounds good? It is.

<br><br>

# I want to contribute.

**Noice. We like.** 

To get started you just have to clone it (`git clone git@github.com:gridonic/components.git`) and `npm install` it.

Now comes the fun part. If you want to add **styles** or **Vue components**, you can develop and test them with the included [Storybook]. Just run `npm run storybook:serve` and [Storybook] will automatically open your browser. Don’t know how to proceed? Head to the Storybook [docs](https://www.learnstorybook.com/intro-to-storybook/) and familiarize yourself.

If you want to at **Twig** partials, feel free to do so. There is currently nothing set up for testing them.

<br><br>

# How do I keep up with the extreme high quality of those components?

Ask your [co-workers](https://gridonic.ch/team), [Google](https://google.com), [Stackoverflow](https://stackoverflow.com/) or the linter of your trust. Or create a [pull request](https://github.com/gridonic/components/pulls) if you want to be on the safe side.

Also make sure to **write tests**. Please for the love of god, do it. Just run `npm run test` to test your tests.

# Publishing

When ready to release, execute the following steps, given that all changes are commited in the `master` branch:

- List **all** changes in the `CHANGELOG.md`
- Bump your **version** and automatically create a git tag with `npm version <type>`, where type is `patch`, `minor` or `major`
- Push the `master` branch (`git push`) and the tags (`git push --tags`)
- Create a **release** in GitHub and fill the description with at least a link to the `CHANGELOG.md`. Add more information if necessary.

That's it! A GitHub action will then **automatically** publish and update the [@gridonic/components] package on the [npm] registry.


<br><br><br><br>

---
 
<p align="center">
  &copy; Gridonic – smashing keys the hard way since 2010.<br><br>
  <a href="https://gridonic.ch">gridonic.ch</a> ・
  <a href="https://gridonic.github.io">gridonic.github.io</a> ・
  <a href="https://twitter.com/gridonic">@gridonic</a>
</p>


[Storybook]: https://storybook.js.org/
[@gridonic/components]: https://npmjs.com/@gridonic/components
[npm]: https://npmjs.com
