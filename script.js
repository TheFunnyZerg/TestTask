document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const button = document.getElementById("submitBtn");
    const output = document.getElementById("output");

    button.addEventListener("click", () => {
        const value = input.value;
        const parsedValue = parseInt(value, 10);

        var givenSum = 0;

        var n10 = 0;
        var n5 = 0;
        var n2 = 0;

        if (parsedValue % 2 === 0)
        {
            givenSum = 2;
            n2++;
        }
        else
        {
            givenSum = 5;
            n5++;
        }

        while (givenSum < parsedValue)
        {
            givenSum += 2;
            n2++;

            if (n2 === 5)
            {
                n10++;
                n2 -= 5;
            }
        }

        output.textContent = `[${n10}, ${n5}, ${n2}]`;
    });
});
