To calculate the correct delay for `setTimeout` based on a beats-per-minute (BPM) value, you can use the following formula:

\[ \text{Delay (ms)} = \frac{60000}{\text{BPM}} \]

Given that:

- For `myFunc60BPM`, the delay is `1000` ms, which corresponds to 60 BPM.
- For `myFunc20BPM`, you want to calculate the corresponding delay.

Since 20 BPM means 20 beats per minute, you can calculate the delay like this:

\[
\text{Delay (ms)} = \frac{60000}{20} = 3000 \text{ ms}
\]

So, the `setTimeout` for 20 BPM would be:

```javascript
setTimeout(myFunc20BPM, 3000);
```

This means `myFunc20BPM` will be called every 3000 milliseconds, which corresponds to 20 beats per minute.
