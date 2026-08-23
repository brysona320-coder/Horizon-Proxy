"use strict";

function search(input, template) {

    input = input.trim();

    if (!input) {
        return null;
    }

    try {
        const url = new URL(input);

        if (
            url.protocol === "http:" ||
            url.protocol === "https:"
        ) {
            return url.toString();
        }
    } catch {}

    try {
        const possibleUrl = new URL(`https://${input}`);

        if (possibleUrl.hostname.includes(".")) {
            return possibleUrl.toString();
        }
    } catch {}

    return template.replace(
        "%s",
        encodeURIComponent(input)
    );
}
