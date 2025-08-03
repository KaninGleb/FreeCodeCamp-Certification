const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const errorMsg = document.getElementById("error-msg");
const checkMessageButton = document.getElementById("check-message-btn");

const denyList = [
  /please help|assist me/i,
  /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i,
  /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i,
  /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i,
  /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:\s|$)/i,
  /\burgent\b|\bact now\b|\blimited (time|offer)\b/i,
  /\byou(?:'ve)? won\b|\bclaim your prize\b/i,
  /(?:free|win|bonus|gift)\s*(?:now|today)?/i,
  /(?:\b|https?:\/\/)?(?:[a-z0-9-]+\.)+(?:ru|tk|cn|top|xyz|info)(\/\S*)?/i,
  /[$€¥£]{2,}/,
  /!{3,}/,
  /(?:click|visit|access) (?:here|link)/i,
];

const normalizeMessage = (msg) =>
  msg.toLowerCase().replace(/[\s\n\r]+/g, " ").trim();

const isSpam = (msg) => {
  const cleanMsg = normalizeMessage(msg);
  return denyList.some((regex) => regex.test(cleanMsg));
};

checkMessageButton.addEventListener("click", () => {
  const message = messageInput.value.trim();

  if (message === "") {
    errorMsg.textContent = "Please enter a message.";
    errorMsg.style.display = "block";
    result.textContent = "";
    return;
  }

  errorMsg.style.display = "none";

  const verdict = isSpam(message)
    ? "⚠️ This looks like a spam message."
    : "✅ This message does not appear to be spam.";

  result.textContent = verdict;
  messageInput.value = "";
});
