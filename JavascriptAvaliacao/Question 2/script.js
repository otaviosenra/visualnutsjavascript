	var lista;
	
	function getNumberofCountries() {
		return lista.length;
	}
	
	function getCountryMostOficialSpeakDe() {
		
		let numberOfLang = 0;
		let country;

		for(let count = 0; count < lista.length; count++) {
			
			if(lista.get(count).getLanguages().contains("de")) {
				if(numberOfLang < lista.get(count).getLanguages().size()){
					numberOfLang = lista.get(count).getLanguages().size();
					country = lista.get(count);
				}
			}
			count++;
		}
		return country;
		
	}
	
	function Integer getNumberOfOficialLanguagesSpoken(List<Info> lista){
		
		Integer numberOfLang = 0;
		Integer count=0;
		List<String> listlang = new ArrayList<String>();
		while(count < lista.size()) {
			for(int i=0; i < lista.get(count).getLanguages().size();i++) {
				if(!listlang.contains(lista.get(count).getLanguages().get(i))) {
					numberOfLang ++;
					listlang.add(lista.get(count).getLanguages().get(i));
				}
			}
			
			count++;
		}
		return numberOfLang;
		
	}
	
	function Info getCountryMostOficialSpeakLang(List<Info> lista){
		
		Integer numberOfLang = 0;
		Info country = new Info();
		Integer count=0;
		while(count < lista.size()) {
				if(numberOfLang < lista.get(count).getLanguages().size()){
					numberOfLang = lista.get(count).getLanguages().size();
					country = lista.get(count);
				}
			
			count++;
		}
		return country;
		
	}

	function String getMostCommonOficialLangSpoken(List<Info> lista){
		
		Boolean pass = true;
		String[] mostCommonLang = new String[2];
		mostCommonLang[0] = "";
		mostCommonLang[1] = "0";
		
		List<String[]> InfoLang= new ArrayList<String[]>();
		Integer count=0;
		while(count < lista.size()) {
			for(int i=0; i < lista.get(count).getLanguages().size();i++) {
				
				if (InfoLang.size() == 0) {
					InfoLang.add(new String[2]);
					InfoLang.get(0)[0] = lista.get(count).getLanguages().get(i);
					InfoLang.get(0)[1] = "1";
				}else {
					for(int j=0 ; j < InfoLang.size(); j++) {
						if(lista.get(count).getLanguages().get(i).contains(InfoLang.get(j)[0])) {
							InfoLang.get(j)[1] = "" + (Integer.parseInt(InfoLang.get(j)[1])+1);
							pass = false;
							break;
						}
					}
					if (pass) {
						InfoLang.add(new String[2]);
						InfoLang.get(InfoLang.size()-1)[0] = lista.get(count).getLanguages().get(i);
						InfoLang.get(InfoLang.size()-1)[1] = "1";
					}
				}
			}
		
			count++;
		}
		
		String Final = "";
		
		for(String[] l : InfoLang) {
			if(Integer.parseInt(mostCommonLang[1]) < Integer.parseInt(l[1])){
				mostCommonLang = l;
				Final = l[0];
			}else if (Integer.parseInt(mostCommonLang[1]) == Integer.parseInt(l[1])) {
				Final += ", "+l[0];
			}
		}
		
		return Final;
		
	}
	
		
		
		List<JSONObject> jsonObject;
		//Cria o parse de tratamento
		JSONParser parser = new JSONParser();
		//Variaveis que irao armazenar os dados do arquivo JSON
		List<Info> lista= new ArrayList<Info>();

		
			//Salva no objeto JSONObject o que o parse tratou do arquivo
			jsonObject = (List<JSONObject>) parser.parse(new FileReader(
					"saida.json"));

			//Salva nas variaveis os dados retirados do arquivo
			
			Integer i=0;
			while(i < jsonObject.size()) {
				lista.add(new Info());
				lista.get(i).setCountry( (String) jsonObject.get(i).get("country"));
				lista.get(i).setLanguages((List<String>) jsonObject.get(i).get("languages"));
				i++;
			}
			
			console.log(" Number of countries: " + getNumberofCountries(lista));
			console.log(" The country with most official languages spoken (DE): " + getCountryMostOficialSpeakDe(lista));
			console.log(" The count of the official languages spoken: " + getNumberOfOficialLanguagesSpoken(lista));
			console.log(" The country with most official languages spoken: " + getCountryMostOficialSpeakLang(lista));
			console.log(" The most common Language of all countries: " + getMostCommonOficialLangSpoken(lista));
			