/**
	영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
	
	입출력 예
	입력 #1
	
	aBcDeFg
	출력 #1
	
	AbCdEfG
 */
package Programmers;

import java.util.Scanner;

public class basic_04 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        
        // 힌트 봄..
        String answer = "";
        
        for (int i = 0; i < a.length(); i++) {
			char b = a.charAt(i);
			
			if(Character.isUpperCase(b)) {			// 대문자라면
				answer += Character.toLowerCase(b);
			}
			else {									// 소문자라면
				answer += Character.toUpperCase(b);
			}
		}

        System.out.println(answer);
        sc.close();
    }
}
