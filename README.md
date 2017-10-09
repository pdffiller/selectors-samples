# Selectors Samples

## Presentation describing the samples:
[Selectors - reducing the coupling of React/Redux-applications](https://drive.google.com/file/d/0B92i5IyVE2KpMWhoQ3NsaTRyQnM/view?usp=sharing)

## Local deployment

```sh
git clone git@github.com:pdffiller/selectors-samples.git
cd selectors-samples
npm install            # it is critical to install dependencies from master
```

## Starting samples:

Choosing the sample:
```sh
git fetch
git branch -a
git checkout sample-<n-m>
npm start
```
Then follow to the instruction printed to console.


**For windows users**: `npm start` should be enriched with `--port` and `--public`
options:

```sh
npm start -- --port <PORT> --public <you.loc.al.ip>:<PORT>
```

## Public Deployed Samples:

1. [Sample Application without selectors](https://pdffiller.github.io/selectors-samples/sample-1/) (branch: **sample-1**)
2. [Application within buggy selectors](https://pdffiller.github.io/selectors-samples/sample-2/) (branch: **sample-2**)
3. [Application with memorized selectors](https://pdffiller.github.io/selectors-samples/sample-3/) (branch: **sample-3**)
4. [Application with two lists and unwanted rendering](https://pdffiller.github.io/selectors-samples/sample-4/) (branch: **sample-4-1**)
4. [Two lists with dedicated selectors](https://pdffiller.github.io/selectors-samples/sample-5/) (branch: **sample-4-4**)