# Bender UI 

## Required Schema

> Job Request
```json
{
  job_id: <int>,
  grid: [
            [
                {
                    color: <str>,
                    text: <str>,
                },
                {
                    color: <str>,
                    text: <str>,
                },
                {
                    color: <str>,
                    text: <str>,
                },
            ],
            [
                {
                    color: <str>,
                    text: <str>,
                },
                {
                    color: <str>,
                    text: <str>,
                },
                {
                    color: <str>,
                    text: <str>,
                },
            ],
            [
                {
                    color: <str>,
                    text: <str>,
                },
                {
                    color: <str>,
                    text: <str>,
                },
                {
                    color: <str>,
                    text: <str>,
                },
            ],
        ],
    query: <str>,
}
```
> Response
```json
{
    job_id: <int>,
    selected: {<int>, <int>},
}
```
    

### Example:
> Request
```json
{
  job_id: 2a2c4e,
  grid: [
            [
                {
                    color: null,
                    text: null,
                },
                {
                    color: 'red',
                    text: 'Green',
                },
                {
                    color: null,
                    text: null,
                },
            ],
            [
                {
                    color: 'blue',
                    text: 'Red',
                },
                {
                    color: null,
                    text: null,
                },
                {
                    color: null,
                    text: null,
                },
            ],
            [
                {
                    color: 'green',
                    text: 'Blue',
                },
                {
                    color: null,
                    text: null,
                },
                {
                    color: null,
                    text: null,
                },
            ],
        ],
    query: "Please select the Blue Box",
}
```
```
==>
          Please select the Blue Box

      |----------|----------|----------|
      |          |          |          |
      |          |  GREEN   |          |
      |          |          |          |
      |----------|----------|----------|
      |          |          |          |
      |    RED   |          |          |
      |          |          |          |
      |----------|----------|----------|
      |          |          |          |
      |   BLUE   |          |          |
      |          |          |          |
      |----------|----------|----------| 
```
> Response
```json
{
    job_id: 2a2c4e,
    selected: {0, 1},
}
```


### Example:
> Request
```json
{
  job_id: 2d3c4e,
  grid: [
            [
                {
                    color: 'blue',
                    text: 'Red',
                },
                {
                    color: 'red',
                    text: 'Green',
                },
                {
                    color: 'green',
                    text: 'Blue,
                },
            ],
        ],
    query: "Please select the box that says RED",
}
```
```
==>
      Please select the box that says Red

      |----------|----------|----------|
      |          |          |          |
      |    RED   |  GREEN   |   BLUE   |
      |          |          |          |
      |----------|----------|----------|
```
```json
{
    job_id: 2d3c4e,
    selected: {0, 0},
}
```
