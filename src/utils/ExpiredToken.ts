class ExpiredToken {
  expires_in;
  expired_at;

  // number of seconds until expiration
  constructor(time: number) {
    this.expires_in = time;
    this.expired_at = this.generateExpiredAt(time);
  }

  private generateExpiredAt(exp: number) {
    const timeNow = new Date().getTime();

    return new Date(timeNow + exp * 1000).getTime();
  }

  static isExpired(expired_at: number): boolean {
    return new Date().getTime() > expired_at;
  }
}

export default ExpiredToken;
