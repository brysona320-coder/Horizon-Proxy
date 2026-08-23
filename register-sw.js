"use strict";

async function registerSW() {

    if (!("serviceWorker" in navigator)) {
        throw new Error(
            "This browser does not support service workers."
        );
    }

    if (
        location.protocol !== "https:" &&
        location.hostname !== "localhost" &&
        location.hostname !== "127.0.0.1"
    ) {
        throw new Error(
            "Ultraviolet requires HTTPS when hosted publicly."
        );
    }

    await navigator.serviceWorker.register(
        "/uv/uv.sw.js"
    );
}
