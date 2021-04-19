<template lang='pug'>
  section.table
    .container
      .table__cont
        .table-head
          .table__row
            .table__col.table__col-1
              span.table-head__txt.table-head__txt--large Выбрано: {{ usersInTable }}

            .table__col.table__col-2
              .sort(
                :class='{ active: currentSortType === "followers" }'
                @click='sort("followers")'
              )
                span.sort__txt.table-head__txt Подписчиков
                CarpetIcon

            .table__col.table__col-3
              .sort(
                :class='{ active: currentSortType === "rate" }'
                @click='sort("rate")'
              )
                span.sort__txt.table-head__txt Рейтинг увлеченности
                CarpetIcon

        .table__row(
          v-for='user in users'
          :key='user.id'
        )
          .table__col.table__col-1
            .table-user
              a.table-user__ava-cont(:href='user.profileUrl')
                img.table-user__ava(
                  :src='user.avatarUrl'
                  :alt='user.name'
                )
              .table-user__txt-cont
                a.table-user__profile(:href='user.profileUrl') @{{ user.name }}
                span.table-user__txt {{ user.name }}

          .table__col.table__col-2
            span {{ user.followers }}

          .table__col.table__col-3
            span {{ user.er }}%
</template>

<style src='./style.styl' lang='stylus' scoped></style>


<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import FieldService from '@/data/FieldService'

import CarpetIcon from './icons/carpet.svg'


@Component({
  components: { CarpetIcon }
})

export default class Table extends Vue {
  users: any[]    = []
  usersInTable    = 0
  currentSortType = 'followers'


  sort(sortType: string): void {
    const sortByType: (type: string) => void = type => {
      this.users.sort((a, b) => 
        parseFloat(b[type]) - parseFloat(a[type])
      )
    }

    switch (sortType) {
      case 'followers':
        sortByType('followers')
        break

      case 'rate':
        sortByType('er')
        break
    }

    this.currentSortType = sortType
  }


  getInfluencers: () => void = async () => {
    const fieldService = new FieldService()

    await fieldService
      .getInfluencers()
      .then(responseData => 
        responseData.map(
          influencer => this.users.push(influencer)
        )
      )
  }


  async created(): Promise<void> {
    await this.getInfluencers()

    this.sort(this.currentSortType)
    this.usersInTable = this.users.length
  }
}
</script>
