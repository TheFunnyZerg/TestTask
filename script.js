document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const button = document.getElementById("submitBtn");
    const output = document.getElementById("output");

    button.addEventListener("click", () => {
        const value = input.value;
        const parsedValue = parseInt(value, 10);

        var parsedValueMod10 = parsedValue % 10;

        var n10 = Math.floor(parsedValue / 10);
        var n5 = 0;
        var n2 = 0;

        if (parsedValueMod10 < 5)
        {
            n2 = parsedValueMod10 / 2;
        }
        else
        {
            if ((parsedValueMod10 - 5) % 2 === 0)
            {
                n5 = 1;
                parsedValueMod10 -= 5;
            }
            n2 = parsedValueMod10 / 2;
        }

        output.textContent = `[${n10}, ${n5}, ${n2}]`;
    });
});
