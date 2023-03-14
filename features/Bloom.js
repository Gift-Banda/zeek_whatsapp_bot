async function query(data) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/bigscience/bloom',
    {
      headers: {
        Authorization: 'Bearer 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',
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

query({ inputs: 'question: okra recipes. answer:' }).then(
  (response) => {
    console.log(JSON.stringify(response));
  }
);
