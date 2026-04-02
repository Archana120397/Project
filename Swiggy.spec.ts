import { test, expect } from '@playwright/test';

test('Swiggy text extraction', async ({ page }) => {

    await page.goto('https://www.swiggy.com/collections/83639?collection_id=83639');

    // wait for content to load
    await page.waitForLoadState('networkidle'); 

    const elements = await page.locator('.sc-uVWWZ.fUNQXi').all();

    console.log("Total elements: " + elements.length);

    for (const el of elements) {
        const text = await el.textContent();

        if (text && text.trim().length > 0) {
            console.log("TextContent: " + text.trim());
        }
    }
});

test('Swiggy text extraction1', async ({ page }) => {

    await page.goto('https://www.swiggy.com/collections/83639?collection_id=83639');

    // wait for content to load
    await page.waitForLoadState('networkidle');

  const texts = await page.locator('.sc-uVWWZ.fUNQXi').allInnerTexts();

const count = texts.filter(t => t.includes("50% OFF")).length;

console.log("50% OFF count:", count);
});

test('Restaurant + Offer mapping using parent container', async ({ page }) => {

    await page.goto('https://www.swiggy.com/collections/83639?collection_id=83639');

    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(5000); // important for Swiggy

    // Parent container
    const cards = page.locator('.sc-huQIOr.gKKma');

    const count = await cards.count();
    console.log("Total Cards:", count);
    let offerCount = 0;
    for (let i = 0; i < count; i++) {

        const card = cards.nth(i);

        // Restaurant Name
        const name = await card.locator('.sc-aXZVg.brETgz').innerText();

        // Offer
        const offerLocator = card.locator('.sc-uVWWZ.fUNQXi');

        let offer = "No Offer";
        if (await offerLocator.count() > 0) {
            offer = (await offerLocator.first().innerText()).trim();
            if (offer.includes("50% OFF")) {
                offerCount++;
            }
        }

        console.log(`Restaurant: ${name} | Offer: ${offer}`);
    }

});

test.only('Get 50% OFF restaurant details', async ({ page }) => {

    await page.goto('https://www.swiggy.com/collections/83639?collection_id=83639');

    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(5000);

    const cards = page.locator('.sc-huQIOr.gKKma');

    const count = await cards.count();
    console.log("Total Cards:", count);

    let offerCount = 0;

    for (let i = 0; i < count; i++) {

        const card = cards.nth(i);

        // Offer
        const offerLocator = card.locator('.sc-uVWWZ.fUNQXi');

        if (await offerLocator.count() > 0) {

            const offer = (await offerLocator.first().innerText()).trim();

            if (offer.includes("50% OFF")) {

                offerCount++;

                // ✅ Restaurant Name
                const name = await card.locator('.sc-aXZVg.brETgz').innerText();

                // ✅ Price (try this selector - may vary)
                let price = "Not Available";
                const priceLocator = card.locator('text=₹');

                if (await priceLocator.count() > 0) {
                    price = (await priceLocator.first().innerText()).trim();
                }

                console.log(`\n🔥 Match ${offerCount}`);
                console.log(`Restaurant: ${name}`);
                console.log(`Price: ${price}`);
                console.log(`Offer: ${offer}`);
            }
        }
    }

    console.log("\n50% OFF count:", offerCount);

});