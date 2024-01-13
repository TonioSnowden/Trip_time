async function scrape(id) {
    response = await fetch(`https://flatfox.ch/api/v1/public-listing?pk=${id}`);
    data = await response.json();
    return data;
}

function verify_address(address) {
    return True
}