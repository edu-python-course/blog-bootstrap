const iter_topics = (value) => value.split(";").map(topic => topic.trim())

module.exports = iter_topics
