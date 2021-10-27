<template>
  <div>
    <b-table striped hover :items="items" :fields="fields" @row-clicked="rowClick"></b-table> <!-- fields : 컬럼 Customizing --> <!-- row-clicked 해당 로우 클릭시 이벤트처리 -->
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>

<script>
import data from '@/data'
 export default {
    data() {
      let items = data.Content.sort((a,b) => {return b.content_id - a.content_id}) /* 오름차순 a-b, 내림차순 b-a */
      items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}}) /* 현재 객체 아이템의 user_id와 일치하는 user_id를 리턴, user_id 고유한값이기때문에 중복된값이 없으므로 항상 1개의 배열을 가지고있기 떄문에 0번째 배열에서 객체를 가져와서 비교한다. */
      return {
        fields: [
            {
                key: 'content_id',
                label: '글번호'         /* 컬럼명 변경 */
            },
            {
                key: 'title',
                label: '제목'
            },
            {
                key: 'created_at',
                label: '작성일'
            },
            {
                key: 'user_name',
                label: '글쓴이'
            }
        ],
        items: items
      }
    },
    methods: {
      rowClick(item) {  /* item, index, e */
        console.log(item);
        this.$router.push({
          path: `/board/free/detail/${item.content_id}`
        })
      },
      writeContent() {
        this.$router.push({
          path: '/board/free/create'
        })
      },
    }
  }
</script>