"""
A small Python program that uses the GitHub search API to list
the top projects by language, based on stars.
"""

import requests

# Constant convention in Python is to use all caps and snake case
GITHUB_API_URL = "https://api.github.com/search/repositories"


def create_query(programming_languages, min_stars=50000):
    """Create the query string for the API request."""
    query = f"stars:>{min_stars} "

    for programming_language in programming_languages:
        query += f"language:{programming_language} "

    # a sample query looks like: "stars:>50 language:python language:javascript"
    return query


# An example of a function with default arguments. It's a function since it uses the def keyword,
# parentheses, and a colon. AKA a function definition.
def repos_with_most_stars(programming_languages, sort="stars", order="desc"):
    """Get the list of repos whose stars are in the top 1%."""

    query = create_query(programming_languages)
    params = {"q": query, "sort": sort, "order": order}
    # q=stars:>50000+language:python+language:javascript+language:ruby+&sort=stars&order=desc'

    response = requests.get(GITHUB_API_URL, params=params, timeout=10)
    status_code = response.status_code

    if status_code != 200:
        raise RuntimeError(f"An error occurred. HTTP Code: {status_code}.")

    response_json = response.json()  # Returns a dictionary
    return response_json["items"]


if __name__ == "__main__":
    # This is the main entry point of the program.

    languages = ["python", "javascript", "ruby"]
    results = repos_with_most_stars(languages)

    for result in results:
        language = result["language"]
        stars = result["stargazers_count"]
        name = result["name"]

        # More info on f-strings: https://realpython.com/python-f-strings/
        print(f"-> {name} is a {language} repo with {stars} stars.")
