module.exports={
	rules: [
		//banner
	    {
	      pattern: /\/api\/banner\.php\?type=banner/,
	      respondwith: './banner.json'
	    },
	    //duli
	    {
	      pattern: /\/api\/duli\.php\?type=refresh\&pageNum=1/,
	      respondwith: './duli/duli2.json'
	    },
	    {
	      pattern: /\/api\/duli\.php\?type=more\&pageNum=1/,
	      respondwith: './duli/duli1.json'
	    },
	    {
	      pattern: /\/api\/duli\.php\?type=more\&pageNum=2/,
	      respondwith: './duli/duli2.json'
	    },
	    {
	      pattern: /\/api\/duli\.php\?type=more\&pageNum=3/,
	      respondwith: './duli/duli3.json'
	    },
	    {
	      pattern: /\/api\/duli\.php\?type=more\&pageNum=4/,
	      respondwith: './duli/duli4.json'
	    },
	    //jingxuan
	    {
	      pattern: /\/api\/jingxuan\.php\?type=more\&pageNum=1/,
	      respondwith: './jingxuan/jingxuan1.json'
	    },
	    //list
	    {
	      pattern: /\/api\/list\.php\?id=1/,
	      respondwith: './list/list1.json'
	    },
	    {
	      pattern: /\/api\/list\.php\?id=2/,
	      respondwith: './list/list2.json'
	    },
	    {
	      pattern: /\/api\/list\.php\?id=3/,
	      respondwith: './list/list3.json'
	    },
	    {
	      pattern: /\/api\/list\.php\?id=4/,
	      respondwith: './list/list4.json'
	    },
	    {
	      pattern: /\/api\/list\.php\?id=5/,
	      respondwith: './list/list5.json'
	    },
	    {
	      pattern: /\/api\/list\.php\?id=6/,
	      respondwith: './list/list6.json'
	    },
	    {
	      pattern: /\/api\/list\.php\?id=7/,
	      respondwith: './list/list7.json'
	    },
	    {
	      pattern: /\/api\/list\.php\?id=8/,
	      respondwith: './list/list8.json'
	    },
	]
}
