 <template>
  <div>
    <el-table
      ref="elTable"
      :data="data"
      style="width:100%"
      @select="clickCheckbox"
      @select-all="clickCheckbox"
      @row-click="clickRow" 
      v-loading="loading"
      class="query-table"
    >
      <el-table-column type="index" width="60" fixed></el-table-column>

      <el-table-column
        v-for="(item,index) in columns"
        :prop="item.field"
        :label="item.label"
        :fixed="item.isFix"
        :width="item.width"
        :min-width="item.minWidth"
        :sortable="item.isSort"
        :key="index"
        :show-overflow-tooltip="true"
      >
        
      </el-table-column>
      <el-table-column v-if="actionList.length>0" label="操作">
        <template slot-scope="scope">
            <span class="operate-btn" v-for="(action,index) in actionList" :key="index" @click.stop="$emit(action.field,scope.row)">{{action.name}}</span>
        </template>
      </el-table-column>
    </el-table>

    <div class="table-footer clearFloat" v-if="!hasPagination">
      <div class="fr inlineBlock1">
        <span>每页行数</span>
        <Number-Select
          :options="numberList"
          name="pagesize"
          @pagesize="watchPageSize"
          :width="70"
        ></Number-Select>
        <div class="page">
          <div class="up-page" @click="upPage" :class="{'disable': selfCurPage<2}">
            <i class="el-icon-caret-left"></i>
          </div>
          <Number-Select
            :options="totalPage"
            name="curpage"
            @curpage="watchCurPage"
            :width="70"
            :default="selfCurPage"
          ></Number-Select>

          <div class="down-page" @click="downPage" :class="{'disable': selfCurPage==totalPage}">
            <i class="el-icon-caret-right"></i>
          </div>
        </div>
        <span>共{{totalPage}}页</span>
      </div>
    </div>
  </div>
</template>

 <script>
import NumberSelect from "@/components/Select/numberSelect";
import {  pageSizeList,  timeZoneList } from "@/utils/constant";
/****
 * 可监听的事件：
 * changeselect：
 * changesort 
 * changetzone  
 * changepagesize 
 * changecurpage 
 * initTable 
 * modifyStatus
 * 
 */
export default {
  name: "BaseTable",
  components: {
    NumberSelect
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    totalPage: {
      type: Number,
      default: 0
    },
    curPage: {
      type: Number,
      default: 1
    },
    hasPagination: {
      type: Boolean,
      default: false
    },
    //操作列，各种操作集合
    //demo： [
      // {name:'', 操作的显示文字
      // field:''} 操作的监听事件名，用于父组件中监听
      // ]
    actionList:{
      type: Array,
      default: ()=>[]
    }
  },
  data() {
    return {
      loading: false,//是否显示加载
      selectedRows: [],//勾选的行数
      numberList: pageSizeList,//可选页面行数下拉数组
      timeZoneList: timeZoneList,//时区下拉数组
      tzone: timeZoneList[0].value,//时区默认值
      selfCurPage: this.curPage,//当前页
      pageSize: pageSizeList[0],//默认第一项
      sort: {},//排序信息，包括排序字段、排序方式（正序倒序）
    };
  },
  methods: {
    
    //点击勾选框
    clickCheckbox(selection, row) {
      this.selectedRows = selection;
      this.$emit("changeselect", this.selectedRows);
    },
    //点击取消选择
    clearSelect() {
      this.$refs.elTable.clearSelection();
      this.selectedRows = this.$refs.elTable.selection;
      this.$emit("changeselect", this.selectedRows);
    },
    //点击列表全选
    allSelect() {
      if (this.selectedRows.length == this.data.length) {
        return false;
      }
      this.$refs.elTable.toggleAllSelection();
    },
    watchSelect1(val) {
      console.log(11122, val);
    },
    watchSelect2(val) {
      console.log(44444, val);
    },
    changeSort(param) {
      //prop: 排序字段，排序方式：ascending（正序）、descending（倒序）
      this.sort = { prop: param.prop, order: param.order };
      this.$emit("changesort", this.sort);
    },
    //时区选择监听
    watchTZone(val) {
      this.tzone = val;
      this.$emit("changetzone", val);
    },
    //页展示行数选择监听
    watchPageSize(val) {
      this.pageSize = val;
      //页大小更改的时候，重置页码。
      if(this.selfCurPage != 1){
          this.watchCurPage(1);
      }
      this.$emit("changepagesize", val);
    },
    //当前页码选择监听
    watchCurPage(val) {
      this.selfCurPage = val;
      this.$emit("changecurpage", val);
    },
    //上翻页
    upPage() {
      if (this.selfCurPage > 1) {
        this.selfCurPage--;
        this.$emit("changecurpage", this.selfCurPage);
      }
    },
    //下翻页
    downPage() {
      if (this.selfCurPage < this.totalPage) {
        this.selfCurPage++;
        this.$emit("changecurpage", this.selfCurPage);
      }
    },
    watchSwitch(args, row) {
      this.$emit("modifyStatus", {
        campaignId: row.campaignId,
        orgId: row.orgId,
        adgroupId: row.adgroupId,
        keywordId: row.keywordId,
        value: args[0]
      });
    },
    clickRow(row){
      this.$emit('clickrow',row);
    }
  },
  mounted() {
    this.$emit("initTable", {
      pageSize: this.pageSize,
      pageNo: this.selfCurPage,
      timeType: this.tzone
    });
  },
  watch: {
    curPage() {
      if (this.selfCurPage !== this.curPage) {
        this.selfCurPage = this.curPage;
      }
    }
  },
  computed: {
    curPath() {
      return this.$route.path.substr(1);
    }
  }
};
</script>

 <style lang="scss" scoped>
@import "@/styles/variables.scss";
.btn1 {
  min-width: 42px;
  padding: 0 12px;
  height: 28px;
  border: 1px solid #d7d8db;
  background: #eef4ff;
  display: inline-block;
  color: #8f90a5;
  border-radius: 100px;
  cursor: pointer;
}

.select-info {
  height: 42px;
  line-height: 42px;
  background: #fffaf6;
  border-bottom: 1px solid $clr-elementBorder;
  color: #ff5a00;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div:not(:first-child) {
    margin-left: 20px;
  }
}
.select-btn {
  @extend .btn1;
  color: $clr-tableSelectHint;
  border: 1px solid $clr-tableSelectHint;
  &:hover {
    color: #f29f5b;
    box-shadow: 0 0 3px;
  }
}

.el-switch__core:after {
  width: 14px;
  height: 14px;
  top: 2px;
}
.table-footer {
  padding-top: 30px;
  span {
    font-size: 12px;
    color: #252936;
  }
  .t-zone-hint {
    color: #8f90a5;
  }
}
.page {
  display: inline-block;
  font-size: 0;
  .up-page {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    width: 30px;
    border: 1px solid #dcdfe6;
    vertical-align: top;
    border-radius: 100px 0 0 100px;
    margin-right: -1px;
    cursor: pointer;
    font-size: 14px;
    color: #8e92a0;
    text-align: center;
  }
  .down-page {
    @extend .up-page;
    border-radius: 0 100px 100px 0;
    margin-left: -1px;
  }
  .up-page:hover,
  down-page:hover {
    color: #377fff;
    border-color: #c6c7ca;
  }
  .disable {
    opacity: 0.5;
    cursor: no-drop;
  }
}
.table tr td .yellow {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: #ffaa1f;
  border-radius: 100px;
  vertical-align: middle;
}

.expand__row {
  padding-left: 135px;
  height: 25px;
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    padding: 0 5px 0;
  }

  .keyword {
    width: 141px;
  }
  .cpName {
    width: 94px;
  }
  .dosage {
    width: 73px;
  }
  .cost {
    width: 84px;
  }
  .callbackNum {
    width: 73px;
  }
  .callbackRate {
    width: 73px;
  }
  .hot {
    width: 96px;
  }
  .befRanking {
    width: 96px;
  }
  .aftRanking {
    width: 96px;
  }
  .rank {
    width: 82px;
  }
}

.operate-btn {
  cursor: pointer;
  color: #fd3f12;
}
.operate-btn:not(:last-of-type){
  margin-right: 5px;
}
</style>
<style lang="scss">
.page .el-input input {
  border-radius: 0px;
}
.query-table.el-table td div,
.query-table.el-table th > .cell,
.query-table.el-table .cell.el-tooltip span,
.query-table.el-table .el-table__expand-icon > .el-icon {
  font-size: 12px;
}

.query-table.el-table .cell,
.el-table th div,
.el-table--border td:first-child .cell,
.el-table--border th:first-child .cell {
  padding-left: 5px;
}

.query-table.el-table .cell,
.el-table th div {
  padding-right: 5px;
}

.query-table .el-table__expanded-cell {
  padding: 5px 50px;
}
</style>