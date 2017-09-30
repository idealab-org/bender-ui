# Bender UI 

## Build 
> yarn build

## Required Schema

> Job Request
```json
{
  "job_id": <int>,
  "grid": [
            [
                {
                    "color": <str>,
                    "text": <str>,
                },
                {
                    "color": <str>,
                    "text": <str>,
                },
                {
                    "color": <str>,
                    "text": <str>,
                },
            ],
            [
                {
                    "color": <str>,
                    "text": <str>,
                },
                {
                    "color": <str>,
                    "text": <str>,
                },
                {
                    "color": <str>,
                    "text": <str>,
                },
            ],
            [
                {
                    "color": <str>,
                    "text": <str>,
                },
                {
                    "color": <str>,
                    "text": <str>,
                },
                {
                    "color": <str>,
                    "text": <str>,
                },
            ],
        ],
    "query": <str>,
    "time": <int> (in ms)
}
```
> Response
```json
{
    "job_id": <int>,
    "selected": [<int>, <int>],
}
```
    

### Example:
> Request
```json
{
  "job_id": 224322312,
  "grid": [
            [
                {
                    "color": null,
                    "text": null,
                },
                {
                    "color": "red",
                    "text": "Green",
                },
                {
                    "color": null,
                    "text": null,
                },
            ],
            [
                {
                    "color": "blue",
                    "text": "Red",
                },
                {
                    "color": null,
                    "text": null,
                },
                {
                    "color": null,
                    "text": null,
                },
            ],
            [
                {
                    "color": "green",
                    "text": "Blue",
                },
                {
                    "color": null,
                    "text": null,
                },
                {
                    "color": null,
                    "text": null,
                },
            ],
        ],
    "query": "Please select the Blue Box",
    "time": 5000,
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
    "job_id": 224322312,
    "selected": [0, 1],
}
```


### Example:
> Request
```json
{
  "job_id" : 2312312,
  "grid": [
            [
                {
                    "color": "blue",
                    "text": "Red",
                },
                {
                    "color": "red",
                    "text": "Green",
                },
                {
                    "color": "green",
                    "text": "Blue",
                },
            ],
        ],
    "query": "Please select the box that says RED",
    "time": 5000,
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
> Response
```json
{
    "job_id": 2312312,
    "selected": [0, 0],
}
```
