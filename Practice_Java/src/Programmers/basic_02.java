// 정수 a와 b가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
package Programmers;

import java.util.Scanner;

public class basic_02 {
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        
        // 아래는 다른 사람 풀이 방법인데 내가 작성한 11ln, 12ln을 이렇게 한 줄로 작성 가능하다.
        System.out.println("a = " + a + "\n" + "b = " + b);
        sc.close();
    }
}
