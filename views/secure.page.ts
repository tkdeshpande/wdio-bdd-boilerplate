import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class SecurePage extends Page {
	message: string;

	constructor(message) {
		super();
		this.message = message;
	}
	/**
	 * define selectors using getter methods
	 */
	public get flashAlert() {
		return $('#flash');
	}
	public get validations(): string[] {
		return [`i*=${this.message}`];
	}
}
