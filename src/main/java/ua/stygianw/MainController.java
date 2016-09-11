package ua.stygianw;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

	private static final int COUNT = 200;
	private static final List<MainControllerResponse> DATA = new ArrayList<>();
	
	static {
		for (int i = 0; i < COUNT; i++) {
			String fakename = RandomStringService.getRandomString(6);
			String fakesurname = RandomStringService.getRandomString(8);
			DATA.add(new MainControllerResponse(fakename, fakesurname));
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/getdata")
	public List<MainControllerResponse> getData(@RequestParam int min, @RequestParam int max) {
		try {
			Thread.sleep(800);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return DATA.subList(min, max);
	}
	
	@RequestMapping("/getcount")
	public int getCount() {
		return COUNT;
	}
	
}

class MainControllerResponse {
	private String name;
	private String surname;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public MainControllerResponse(String name, String surname) {
		super();
		this.name = name;
		this.surname = surname;
	}
	
}


