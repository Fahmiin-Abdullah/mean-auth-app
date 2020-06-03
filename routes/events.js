const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.get('/regular', (req, res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "Lorem ipsum dolor sit amet.",
      "date": "2020-01-01T18:25:43:511Z"
    },
    {
      "_id": "2",
      "name": "Robo Expo",
      "description": "Lorem ipsum dolor sit amet.",
      "date": "2020-01-02T18:25:43:511Z"
    },
    {
      "_id": "3",
      "name": "Car Expo",
      "description": "Lorem ipsum dolor sit amet.",
      "date": "2020-01-03T18:25:43:511Z"
    },
    {
      "_id": "4",
      "name": "Bridal Expo",
      "description": "Lorem ipsum dolor sit amet.",
      "date": "2020-01-04T18:25:43:511Z"
    },
    {
      "_id": "5",
      "name": "Animal Expo",
      "description": "Lorem ipsum dolor sit amet.",
      "date": "2020-01-05T18:25:43:511Z"
    }
  ];

  res.json(events);
});

router.get('/special', (req, res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo Special",
      "description": "Lorem ipsum dolor sit amet!!!",
      "date": "2020-01-01T18:25:43:511Z"
    },
    {
      "_id": "2",
      "name": "Robo Expo Special",
      "description": "Lorem ipsum dolor sit amet!!!",
      "date": "2020-01-02T18:25:43:511Z"
    },
    {
      "_id": "3",
      "name": "Car Expo Special",
      "description": "Lorem ipsum dolor sit amet!!!",
      "date": "2020-01-03T18:25:43:511Z"
    },
    {
      "_id": "4",
      "name": "Bridal Expo Special",
      "description": "Lorem ipsum dolor sit amet!!!",
      "date": "2020-01-04T18:25:43:511Z"
    },
    {
      "_id": "5",
      "name": "Animal Expo Special",
      "description": "Lorem ipsum dolor sit amet!!!",
      "date": "2020-01-05T18:25:43:511Z"
    }
  ];

  res.json(events);
});

module.exports = router;