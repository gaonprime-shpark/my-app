require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const PORT = 3333;
const { MONGO_URI } = process.env;

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());

// CONNECT TO MONGODB SERVER
mongoose
  .connect(MONGO_URI, {
    dbName: 'testDB',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e));

// 몽구스 커넥션에 이벤트 리스너를 달게 해준다. 에러 발생 시 에러 내용을 기록하고, 연결 종료 시 재연결을 시도한다.
mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});

const {
  Types: { ObjectId },
} = Schema; // ObjectId 타입은 따로 꺼내주어야 한다.

//스키마 생성 (각종 옵션 사용 가능)
const UserSchema = new Schema({
  name: String,
  age: Number,
  saveDate: {
    type: Date,
    default: Date.now,
  },
});

const BookSchema = new Schema({
  title: String,
  length: Number,
  author: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
});

//모델은 스키마를 통해서 만드는 인스턴스. 이 객체를 통해 실제 DB에 작업
//UserSchema를 지정하고, User라는(단수라 db에선 컬렉션명이 users로 변환) 컬렉션으로 연결
//컬렉션명을 지정하고싶다면 3번째 인자에 문자열로 넘겨준다.
const User = mongoose.model('User', UserSchema);
const Book = mongoose.model('Book', BookSchema);

const bookSave = async (title, name) => {
  const author1 = await User.findOne({ name });

  const book = new Book({
    title,
    length: 100,
    author: author1,
  });
  //데이터 저장
  book
    .save()
    .then(() => {
      console.log(book);
    })
    .catch((err) => {
      console.log('Error : ' + err);
    });
};

const nameSave = (name) => {
  const me = new User({
    name,
    age: 27,
  });
  //데이터 저장
  me.save()
    .then(() => {
      console.log(me);
    })
    .catch((err) => {
      console.log('Error : ' + err);
    });
};

app.post('/api/test', async (req, res) => {
  console.log(req.body.name);
  const { name } = req.body;
  nameSave(name);
  res.status(200).json('haha');
});

app.get('/api/find', async (req, res) => {
  const users = await User.find({ name: 'Mike' });
  res.status(200).json(users);
});

app.post('/api/bookSave', async (req, res) => {
  const { title, name } = req.body;
  console.log(title);
  bookSave(title, name);
  res.status(200).json('book Save Success');
});

app.post('/api/populate', async (req, res) => {
  const { name } = req.body;
  console.log(name);
  const users = await User.find({ name: name });
  res.status(200).json(users);
});

app.listen(3333, () => {
  console.log(`서버 ${PORT}포트`);
});
