// 首页
1、信息接口：{
	用户信息：xxx
	会员级别:xxx //数字标识
	当前成长值:xxx
	签到一次成长值：number
	差 xxx 成长值 升级为 xxx会员
	所有专属权益列表：[
		{
            name:,//权益对应名称字段，用来区分所对应图标
            desc:'3种车辆',//权益描述
            type:1 //是否有该权益, 1 有权益，0 无权益
        },
        {
            name:,//权益对应名称字段，用来区分所对应图标
            desc:'xxx',//权益描述
            type:1 //是否有该权益
        },
        {
            name:,//权益对应名称字段，用来区分所对应图标
            desc:'xxx',//权益描述
            type:1 //是否有该权益
        },
        {
            name:,//权益对应名称字段，用来区分所对应图标
            desc:'xxx',//权益描述
            type:0 //是否有该权益
        },
        {
            name:,//权益对应名称字段，用来区分所对应图标
            desc:'xxx',//权益描述
            type:0 //是否有该权益
        },
	]
	任务中心 ：[
		{
			name:xxx
			desc:xxx
		},
		{
			name:xxx
			desc:xxx
		},
		{
			name:xxx
			desc:xxx
		},
	]
}

2、签到接口

3、任务中心——》任务列表接口

4、会员规则列表接口  [{rule_name:xxxx,desc:xxxx},,,,]

5、成长值记录列表接口 {
						state:xxxx //刷新声明
						date:[{title:xxx,value:xxx,date:xxx,time:xxx},,,,]
					}

6、会员权益详情 
	入参：权益类型
	出参：{
		权益说明，
		权益内容列表（用车列表要区分会员类型）
	}

7、会员对应车辆详情接口	[
							{
								车辆图片，
								是否可用
							}，，，，，
						]


