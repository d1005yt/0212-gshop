import banners from './banners.json'
import floors from './floors.json'
import todays from './todays.json'
import Mock from 'mockjs'

Mock.mock('/mock/banners', {
  code: 200,
  data: banners,
})
Mock.mock('/mock/floors', {
  code: 200,
  data: floors
})
Mock.mock('/mock/todays', {
  code: 200,
  data: todays
})