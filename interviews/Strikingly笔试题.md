# Strikingly Coding Test - Frontend Engineer

## Instructions

Your solution will be graded based on the following criteria:

- Correctness - 40%
- Space/time complexity - 20%
- Code readability - 40%

## Challenges

### Challenge A

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Please implement a function that returns the sum of all the multiples of 3 or 5 below 1000.

```javascript
function sumOfMultiples() {
    // Implement your solution here
    let s = 0
    for (let i = 999; i>=0; i--) {
        if (i%3===0 || i%5===0) {
            s = s + i
        }
    }
    return s
}
```

### Challenge B

Please implement a function `simplePoller` that does the following:

- `simplePoller` function accepts two arguments: `queryFn` and `callback`
  - `queryFn` is a function that returns `true` or `false`
  - `callback` is a function that should be invoked when `queryFn` returns `true`
- `simplePoller` should invoke `queryFn` periodically
  - when `queryFn` returns false, it waits for some time and invokes `queryFn` again until `queryFn` returns `true`
    - The waiting interval between `queryFn` calls increases by 1.5 times each time, starting from 1 second
  - when `queryFn` returns true, invokes `callback` and exit the function

For example:

- 1st time: wait for 1 second
- 2nd time: invoke `queryFn` and it returns `false`, wait for 1.5 second
- 3rd time: invoke `queryFn` and it returns `false`, wait for 2.25 second
- 4th time: invoke `queryFn` and it returns `true`, execute `callback` and exit

Make sure `simplePoller` passes the following test cases:

- `simplePoller` should wait for 1 second before it invokes `queryFn` the first time
- The waiting interval is 1.5 times of the previous one, except for the first (1 second)
- `simplePoller` should be allowed to be invoked concurrently and invocations of the function won't interfere with each other

Note: You don't have to implement `queryFn` and `callback` in your solution. You can assume they are given. However your implementation of `simplePoller` should be able to take different implementation of `queryFn` and `callback` without problem and to achieve that you are encouraged to implement a few versions of `queryFn` and `callback` for testing purposes.

```javascript
function simplePoller(queryFn, callback) {
    // Implement your solution here
    let timer = 1000
    function fn(){
        setTimeout(()=>{
            if (!queryFn) {
                timer=timer*1.5
                fn()
            } else {
                callback
                return
            }
        }, timer)
    }
}
```
