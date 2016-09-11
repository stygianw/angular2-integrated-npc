package ua.stygianw;

import java.util.Random;

public class RandomStringService {
	
	public static final char[] CHARS = "qwertyuiopasdfghjklzxcvbnm".toCharArray();
	
	public static String getRandomString(int charQty) {
		Random rand = new Random();
		char[] charsToReturn = new char[charQty];
		for (int i = 0; i < charQty; i++) {
			char currChar = CHARS[rand.nextInt(CHARS.length)];
			if(i == 0)  {
				currChar = Character.toUpperCase(currChar);
			}
			charsToReturn[i] = currChar;
			
		}
		return String.valueOf(charsToReturn);
		
	}
	
}
