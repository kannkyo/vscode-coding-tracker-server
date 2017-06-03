
type EChartsStatic = {
	init(dom: HTMLDivElement | HTMLCanvasElement | any, theme?: Object | string, opts?: {
		devicePixelRatio?: number
		renderer?: string
	}): EChartsObject;

	connect(group: string | Array<string>): void;

	disConnect(group: string): void;

	dispose(target: ECharts | HTMLDivElement | HTMLCanvasElement): void;

	getInstanceByDom(target: HTMLDivElement | HTMLCanvasElement): void;

	registerMap(mapName: string, geoJson: Object, specialAreas?: Object): void;

	registerTheme(themeName: string, theme: Object): void;
};

type EChartsObject = {
	group: string;

	setOption(option: EChartOption, notMerge?: boolean, notRefreshImmediately?: boolean): void

	getWidth(): number

	getHeight(): number

	getDom(): HTMLCanvasElement | HTMLDivElement

	getOption(): Object

	resize(opts?: { width?: number | string, height?: number | string, silent?: boolean }): void

	dispatchAction(payload: Object): void

	on(eventName: string, handler: Function, context?: Object): void

	off(eventName: string, handler?: Function): void

	showLoading(type?: string, opts?: Object): void

	hideLoading(): void

	getDataURL(opts: {
		// 导出的格式，可选 png, jpeg
		type?: string,
		// 导出的图片分辨率比例，默认为 1。
		pixelRatio?: number,
		// 导出的图片背景色，默认使用 option 里的 backgroundColor
		backgroundColor?: string
	}): string

	getConnectedDataURL(opts: {
		// 导出的格式，可选 png, jpeg
		type: string,
		// 导出的图片分辨率比例，默认为 1。
		pixelRatio: number,
		// 导出的图片背景色，默认使用 option 里的 backgroundColor
		backgroundColor: string
	}): string

	clear(): void

	isDisposed(): boolean

	dispose(): void

	// 转换逻辑点到像素
	convertToPixel(finder: {
		seriesIndex?: number,
		seriesId?: string,
		seriesName?: string,
		geoIndex?: number,
		geoId?: string,
		geoName?: string,
		xAxisIndex?: number,
		xAxisId?: string,
		xAxisName?: string,
		yAxisIndex?: number,
		yAxisId?: string,
		yAxisName?: string,
		gridIndex?: number,
		gridId?: string
		gridName?: string
	} | string, value: string | Array<any>): string | Array<any>
};

type EChartOption = {
	title?: EChartTitleOption,
	legend?: Object,
	grid?: Object,
	xAxis?: Object,
	yAxis?: Object,
	polar?: Object,
	radiusAxis?: Object,
	angleAxis?: Object,
	radar?: Object,
	dataZoom?: Array<Object>,
	visualMap?: Array<Object>,
	tooltip?: Object,
	toolbox?: Object,
	geo?: Object,
	parallel?: Object,
	parallelAxis?: Object,
	timeline?: Object,
	series?: Array<Object>,
	color?: Array<Object>,
	backgroundColor?: string,
	textStyle?: Object,
	animation?: boolean,
	animationDuration?: number,
	animationEasing?: string,
	animationDurationUpdate?: number,
	animationEasingUpdate?: string
}

type EChartTitleOption = {
	show?: boolean;
	text?: string;
	link?: string,
	target?: string,
	textStyle?: Object,
	subtext?: string,
	sublink?: string,
	subtarget?: string,
	subtextStyle?: Object,
	padding?: number,
	itemGap?: number,
	zlevel?: number,
	z?: number,
	left?: string,
	top?: string,
	right?: string,
	bottom?: string,
	backgroundColor?: string,
	borderColor?: string,
	borderWidth?: number,
	shadowBlur?: number,
	shadowColor?: number,
	shadowOffsetX?: number,
	shadowOffsetY?: number,
}