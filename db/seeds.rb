# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

curriculums = Curriculum.create([
  {
    name: "English CommunicationI"
  },
  {
    name: "English CommunicationII"
  },
  {
    name: "English CommunicationIII"
  },
  {
    name: "PortugueseI"
  },
  {
    name: "PortugueseII"
  },
  {
    name: "PortugueseIII"
  },
  {
    name: "SpanishI"
  },
  {
    name: "SpanishI"
  },
  {
    name: "SpanishIII"
  },
  {
    name: "FrenchI"
  },
  {
    name: "FrenchII"
  },
  {
    name: "FrenchIII"
  },
  {
    name: "ChineseI"
  },
  {
    name: "ChineseII"
  },
  {
    name: "ChineseIII"
  },
  {
    name: "KoreanI"
  },
  {
    name: "KoreanII"
  },
  {
    name: "KoreanIII"
  },
  {
    name: "KoreanIII"
  },
])

reviews = Review.create([
  {
    title: 'Great curriculum',
    description: 'I had a lovely time.',
    score: 5,
    curriculum: curriculum.first
  },
  {
    title: 'Bad curriculum',
    description: 'I had a bad time.',
    score: 1,
    curriculum: curriculum.first
  }
])
