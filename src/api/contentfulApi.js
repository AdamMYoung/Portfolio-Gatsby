import * as contentful from "contentful";

var client = contentful.createClient({
  space: "6x69711h0cvt",
  accessToken: "YA6xOU6T2wNiOzPnjVu9JKT9LBdkJ7JoK6w1DsmK8ts"
});

export const getSnippets = async () =>
  client.getEntries({ include: 2, content_type: "snippetCollection" }).then(entries => entries.items);
