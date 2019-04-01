import {
    format1
} from '@/utils/dateUtil';

export const CAPTCHA_TYPE = {
    REGISTER: "REGISTER",
    FORGET: "FORGET",
    BIND: "BIND",
    UPDATE: "UPDATE",
    BINDMOBILE: "BIND",
    BINDEMAIL: "BIND",
    UPDATEPASSWORD: "FORGET",
    UPDATEMOBILE: "BIND",
    UPDATEEMAIL: "BIND",
}

export const WEEK = [
    'All',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
]

const _generate_hours = () => {
    const _hours = 24;
    let hours = ['12AM'];
    for (let i = 1; i < _hours; i++) {

        let hour = "";
        let _hour = 0;

        if (i < 12) {
            _hour = i.toString().padStart(2, 0)
            hour = _hour + "AM";
        } else {

            if (i == 12) {
                _hour = 12
            } else {
                _hour = i - 12
                _hour = _hour.toString().padStart(2, 0)
            }

            hour = _hour + "PM";
        }
        hours.push(hour);

    }
    return hours;
}
export const HOURS = _generate_hours()


export const pageSizeList = [20, 30, 50, 100];

export const timeZoneList = [{
        label: 'UTC',
        value: 'UTC'
    },
    {
        label: '北京',
        value: 'UTC+8'
    },
];

export const actionAdPlan = [{
        label: '开启',
        value: 'start'
    },
    {
        label: '暂停',
        value: 'stop'
    },
    // {
    //     label: '修改预算',
    //     value: 'modifyBud'
    // },
    // {
    //     label: '修改日限额',
    //     value: 'modifyDayLi'
    // },
    {
        label: '导出',
        value: 'export'
    }
];

export const actionAdGroup = [{
        label: '开启',
        value: 'start'
    },
    {
        label: '暂停',
        value: 'stop'
    },
    {
        label: '修改匹配模式',
        value: 'modify'
    },
    {
        label: '导出',
        value: 'export'
    },
];

export const actionKeyword = [{
        label: '开启',
        value: 'start'
    },
    {
        label: '暂停',
        value: 'stop'
    },
    {
        label: '批量修改价格',
        value: 'modify'
    },
    {
        label: '导出',
        value: 'export'
    },
];

export const actionSearchWord = [{
    label: '添加到广告词组',
    value: 'addadgroup'
}, {
    label: '添加到屏蔽词',
    value: 'addshieldword'
}, {
    label: '导出',
    value: 'export'
}, ]

export const actionShieldWord = [{
    label: '取消屏蔽',
    value: 'unblock'
}]

export const createList = [{
        label: '创建广告计划',
        value: 'createAdPlan'
    },
    {
        label: '创建广告词组',
        value: 'createAdGroup'
    },
    {
        label: '添加关键词',
        value: 'createKeyWord'
    },
    {
        label: '添加屏蔽词',
        value: 'createShieldword'
    },
];

export const dateRangeList = [{
        label: '今天',
        value: 'today'
    },
    {
        label: '昨天',
        value: 'yesterday'
    },
    {
        label: '前7天',
        value: 'lastsevenday'
    },
    {
        label: '本周',
        value: 'thisweak'
    },
    {
        label: '上周',
        value: 'lastweak'
    },
    {
        label: '前4周',
        value: 'lastfourweak'
    },
    {
        label: '前12周',
        value: 'lasttwelveweak'
    },
    {
        label: '本月',
        value: 'thismonth'
    },
    {
        label: '上月',
        value: 'lastmonth'
    },
];

export const stateList = [{
        label: '开启',
        value: '1'
    },
    {
        label: '暂停',
        value: '2'
    },
];

export function lastSevenDay() {
    var time = new Date().getTime();
    var start = new Date(time - 7 * 24 * 60 * 60 * 1000);
    var end = new Date(time);
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);
    return [format1(start), format1(end)];
}

export const matchMode = [{
        label: '精确匹配',
        value: '2'
    },
    {
        label: '广泛匹配',
        value: '1'
    },
];
//搜索词匹配模式
export const searchWMatchModeList = [{
        label: '搜索匹配',
        value: '2'
    },
    {
        label: '广泛匹配',
        value: '1'
    },
];

export const matchRange = [{
        label: '广告词组屏蔽',
        value: '2'
    },
    {
        label: '广告计划屏蔽',
        value: '1'
    },
];

export const unifiedMatchMode = [{
    label: '广泛匹配',
    value: 'BROAD'
}, {
    label: '精确匹配',
    value: 'EXACT'
}, ]

export const searchMatchList = [{
        label: '是',
        value: '2'
    },
    {
        label: '否',
        value: '1'
    },
];

export const matchSourceList = [{
        label: '关键词',
        value: '1'
    },
    {
        label: '搜索匹配',
        value: '2'
    },
];
//列表状态修改value值
export const statusValueList = ['已开启', '已暂停'];

// 趋势图下拉选项
export const trendDrawdownOptions = [{
        key: "localSpend",
        label: "消耗",
        value: "localSpend"
    },
    {
        key: "orgCount",
        label: "新用户",
        value: "orgCount"
    },
    {
        key: "avgCPT",
        label: "CPT",
        value: "avgCPT"
    },
    {
        key: "avgCPA",
        label: "CPA",
        value: "avgCPA"
    },

    {
        key: "conversionRate",
        label: "收益转化率",
        value: "conversionRate"
    },

]

export const INDEX_TABS = {
    account: {
        api: 'reportAsmCampaignChars',
        vsApi: 'reportAsmCampaignCmpchars'
    },
    app: {
        api: 'reportAsmCampaignChars',
        vsApi: 'reportAsmCampaignCmpchars'
    },
    adplan: {
        api: 'reportAsmCampaignChars',
        vsApi: 'reportAsmCampaignCmpchars'
    },
    keyword: {
        api: 'reportAsmKeywordChars',
        vsApi: 'reportAsmKeywordCmpchars'
    },
    searchword: {
        api: 'reportAsmSearchtermChars',
        vsApi: 'reportAsmSearchtermCmpchars'
    },
    adgroup: {
        api: 'reportAsmAdgroupChars',
        vsApi: 'reportAsmAdgroupCmpchars'
    }
}

export const ADV_COLUMNS = [{
        label: "渠道名称",
        field: "ds",
        minWidth: "120",
        isFix: true,
        isSort: true
    },
    {
        label: "状态",
        field: "appid",
        minWidth: "80",
        isFix: true,
        isSort: true
    },
    {
        label: "快速",
        field: "cpName",
        minWidth: "80",
        isFix: true,
        isSort: true
    },
    {
        label: "回调",
        field: "dosage",
        minWidth: "80",
        isFix: true,
        isSort: true
    },
    {
        label: "一元付费",
        field: "cost",
        minWidth: "80",
        isFix: true,
        isSort: true
    },
    {
        label: "对应渠道",
        field: "callbackNum",
        minWidth: "80",
        isFix: true,
        isSort: true
    },
    {
        label: "合作截止日期",
        field: "callbackRate",
        minWidth: "100",
        isFix: true,
        isSort: true
    },
    {
        label: "操作",
        field: "set",
        minWidth: "50",
        isFix: true,
        isSort: false
    }
];

export const emailTypeList = [{
        label: '主送人',
        value: 'email'
    },
    {
        label: '抄送人',
        value: 'cc'
    },
]