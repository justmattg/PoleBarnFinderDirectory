const KEY = "7b2865fe1e4347f99232e5ebd367d323";
const HOST = "polebarndirectory.com";

const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/cost-guide`,
  `https://${HOST}/floor-plans`,
  `https://${HOST}/financing`,
  `https://${HOST}/checklist`,
];

async function submitIndexNow() {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  };

  console.log("Submitting to IndexNow:", JSON.stringify(body, null, 2));

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    console.log(`Success: ${res.status} ${res.statusText}`);
  } else {
    const text = await res.text();
    console.error(`Failed: ${res.status} ${res.statusText}`);
    console.error(text);
    process.exit(1);
  }
}

submitIndexNow();
