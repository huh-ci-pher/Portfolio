
const API_URL = 'http://localhost:8080/api';

async function testContact() {
    console.log('Testing Create Contact...');
    const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'Test Test script',
            email: 'test@script.com',
            subject: 'Script Test',
            message: 'Hello from script',
        }),
    });

    if (res.ok) {
        const data = await res.json();
        console.log('Create Contact Success:', data);
    } else {
        console.error('Create Contact Failed:', res.status, await res.text());
    }

    console.log('\nTesting Get Contacts...');
    const resGet = await fetch(`${API_URL}/contacts`);
    if (resGet.ok) {
        const dataGet = await resGet.json();
        console.log('Get Contacts Success:', dataGet);
    } else {
        console.error('Get Contacts Failed:', resGet.status, await resGet.text());
    }
}

async function testResume() {
    console.log('\nTesting Resume Download...');
    const res = await fetch(`${API_URL}/resume/download`);
    if (res.ok) {
        console.log('Resume Download Success');
    } else {
        console.error('Resume Download Failed:', res.status, await res.text());
    }
}

(async () => {
    try {
        await testContact();
        await testResume();
    } catch (e) {
        console.error('Test Failed with Exception:', e);
    }
})();
