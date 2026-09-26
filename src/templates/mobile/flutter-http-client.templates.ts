import { Template } from "../../types/template.interface.js";

export default [
  {
    title: 'Pass query parameters',
    content: `
final uri = Uri.https(
  'api.example.com',
  '/path',
  {
    'page': '1',
    'limit': '20',
    'search': 'query',
  },
);

// dart:io HttpClient
final request = await HttpClient().getUrl(uri);
final response = await request.close();

// or package:http
// final response = await http.get(uri);

// Or build from an existing Uri:
final uriWithQuery = Uri.parse('https://api.example.com/path').replace(
  queryParameters: {
    'page': '1',
    'limit': '20',
  },
);
`,
    syntaxHighlightLanguage: 'dart',
  },
] as Template[];
