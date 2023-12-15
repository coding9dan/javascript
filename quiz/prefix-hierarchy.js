/*
Given a list of names, determine the number of names in that list for which a given query string is a prefix. The prefix must be at least 1 character less than the entire name string.

Example: Names = ['jackson', 'jacques','jack']

query = ['jack']

The complete query string 'jack' is a prefix of jackson but not of jacques or jack. The prefix cannot contain the entire name string, so 'jack' does not qualify.

Input sample:
names = ['steve', 'stevens', 'danny', 'steves', 'dan', 'john', 'johnny', 'joe', 'alex', 'alexander']
query = ['steve','alex','joe', 'john', 'dan']

sample output = [2,1,0,1,1]
*/

{
  function findPrefixes(names, queries) {
    return queries.map(
      (query) =>
        names.filter((name) => name.startsWith(query) && name !== query).length
    );
  }

  let names = [
    "steve",
    "stevens",
    "danny",
    "steves",
    "dan",
    "john",
    "johnny",
    "joe",
    "alex",
    "alexander",
  ];

  let queries = ["steve", "alex", "joe", "john", "dan", "mike"];

  console.log(findPrefixes(names, queries));
}
