define({
	id: 'ru',
	name: 'Русский',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'Кошелёк не создан.',
			103: 'Wallet file is corrupt. Please recover your wallet from a backup.',
			104: 'The provided password for the wallet is not correct.',
			105: 'No password was provided for the wallet.',
			106: 'Перед  тем, как Вы начнёте работать с кошельком, убедитесь , что он открыт. Чтобы получить доступ к кошельку, введите пароль.',
			107: 'Кошелёк не содержит этот аккаунт .',
			108: 'Аккаунт не может быть удалён .  Вероятнее всего, что аккаунт содержит на балансе более чем 0 XEM или аккаунт, который Вы пытаетесь удалить, является главным.',
			109: 'Кошелёк с таким же именем уже существует. Пожалуйста, выберете другое имя для кошелька.',
			110: 'Кошелёк уже содержит этот аккаунт .',
			111: 'The wallet name is a directory.',
			112: 'The extension of the wallet file is incorrect.',
			113: 'The wallet could not be deleted.',
			121: 'The address book file does not exist.',
			122: 'Address book has not been created.',
			123: 'Address book file is corrupt. Please recover your address book from a backup.',
			124: 'The provided password for the address book is not correct.',
			125: 'No password was provided for the address book.',
			127: 'Address book does not contain this address.',
			128: 'The address provided is not valid.',
			129: 'Another address book with the same name exists already. Please choose an other address book name.',
			130: 'Address book already contains this address.',
			131: 'The address book name is a directory.',
			132: 'The extension of the address book file is incorrect.',
			133: 'The address book could not be deleted.',
			202: 'Отсутствует public key.',
			305: 'NEM Infrastructure Server  не доступен',
			306: 'Произошла непредвиденная ошибка . Приносим свои извинения, повторите попытку снова. В противном случае, обратитесь за поддержкой в NEM NIS/NCC Community.',
			400: 'Некоторые параметры отсутствуют',
			401: 'Операция не может быть завершена, так как может привести к посылке Вашего private key на удалённый сервер.',
			404: 'Неправильное значение загрузки',
			500: 'Невозможно сохранить файл конфигурации',
			600: 'Для отсылки и приёма транзакций, NCC требует перезагрузку NIS сервера. Пожалуйста, используйте меню NCC для перезагрузки в локальный узел.',
			601: 'NIS узел уже запущен. Повторная попытка перезагрузки NIS невозможна.',
			602: 'Cannot perform any operations until db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: 'Предоставленный аккаунт не соответствует базовым требованиям для Генерации . В основном, это связанно с количеством XEM на счету.  Генерация начинается хотя бы с 1,000 XEM.',
			701: 'Предоставленный срок завершения в прошлом. Срок должен быть предоставлен в течении 1-дневного периода.',
			702: 'Предоставленный срок завершения находится  далеко в будущем. Срок должен быть предоставлен в течении 1-дневного периода.',
			703: 'Ваш аккаунт не располагает достаточным количеством средств для отправки этой суммы XEM.',
			704: 'Предоставленный текст сообщения слишком большой для отправки через NEM. Пожалуйста, сократите текст  для его отправки.',
			705: 'Хэш сделки уже существует или в базе данных, или в списке неподтвержденных операций.',
			706: 'Подпись сделки не может быть проверена.',
			707: 'Временная отметка транзакции слишком далеко в прошлом.',
			708: 'Временная отметка транзакции слишком далеко в будущем.',
			709: 'Неизвестный аккакунт. Аккаунт должен быть частью хотя бы одной транзакции (входящей или исходящей),  чтобы быть опознанным сетью.',
			710: 'The transaction was rejected because the transaction cache is too full. A higher fee improves the chance that the transaction gets accepted.',
			730: 'Importance transfer transaction (secure harvesting) conflicts with existing transaction.',
			731: 'Secure harvesting account has non zero balance and cannot be used.',
			732: 'Importance transfer rejected. There is already pending importance transfer operation.',
			733: 'Secure harvesting is already active.',
			734: 'Secure harvesting is NOT active. Cannot deactivate.',
			740: 'Transaction is not allowed for multisig account.',
			741: 'Multisig signature transaction rejected. Current account is not a cosignatory of a multisig account.',
			742: 'Multisig signature transaction rejected. Associated multisig transaction is not known to NEM network',
			743: 'Multisig account modification rejected. One of added accounts is already a cosignatory.',
			901: 'Произошла ошибка в настройках offline mode.',
			1000: "Введённые Вами private key и  public key не соответствуют.",
			1001: 'Введённые Вами  public key и адрес  не соответствуют.',
			1002: 'Адрес не принадлежит главной сети.'
		},
		common: {
			success: 'Успешно',
			appStatus: {
				nccUnknown: 'NCC status is unknown',
				nccUnavailable: 'NCC не доступен',
				nccStarting: 'NCC is starting...',
				nisUnknown: 'NIS status is unknown',
				nisUnavailable: 'NIS не доступен',
				nisStarting: 'NIS is starting...',
				notBooted: 'NIS requires to be booted. Please open your wallet and boot a local node via the popup dialog or configure the auto-boot setting.',
				loading: 'Loading blocks from db, at block: ',
				booting: 'Booting NIS...',
				nisInfoNotAvailable: 'NIS info is not avaiable yet. Trying to retrieve NIS info...',
				synchronizing: 'NIS is synchronizing. At block {{1}}, est. {{2}} behind.',
				daysBehind: {
					0: 'less than 1 day',
					1: '1 day',
					many: '{{1}} days'
				},
				synchronized: 'NIS is synchronized!',
				noRemoteNisAvailable: 'No remote NIS found in the network, disconnected from internet?'
			},
			addressBook: 'Address book',
			password: 'Пароль',
			passwordValidation: 'Password must not be blank',
			address: 'Address',
			privateLabel: 'Приватная маркировка',
			publicLabel: 'Public label',
			noCharge: 'Current account will <b>NOT</b> be charged any fees, multisig account covers them',
			justUse: 'Just use'
		},
		transactionTypes: [
			'TRANSFER TRANSACTION',
			'IMPORTANCE TRANSFER',
			'MODIFICATION OF MULTISIG ACCOUNT',
			'MULTISIG TRANSACTION'
		],
		transactionDirections: {
			pending: 'Транзакции в ожидании',
			outgoing: 'Исходящие Транзакции',
			incoming: 'Входящие Транзакции',
			self: 'Авто транзакции',
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'ОШИБКА {{1}}'
			},
			confirmDefault: {
				yes: 'Да',
				no: 'Нет'
			},
			settings: {
				title: 'Settings',
				language: {
					label: 'Language'
				},
				remoteServer: {
					tabTitle: 'Remote Server',
					protocol: 'Protocol',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Node name',
					account: 'Account',
					primaryAccount: 'Primary Account',
					auto: 'Auto boot when a wallet is opened'
				},
				save: 'Save',
				saveSuccess: 'Settings have been saved successfully'
			},
			multisig: {
				title: 'Convert account to multisig',
				multisigAccount: 'Multisig account',
				cosignatories: "Cosignatories' addresses",
				labelDesc: 'Этот аккаунт маркирован как {{1}}',
				nullLabelDesc: "Этот аккаунт не имеет маркировки",
				addCosignatory: '+ Add Cosignatory',
				cancel: 'Cancel',
				convert: 'Convert',
				fee: 'Оплата',
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: 'Due by',
				useMinimumFee: 'Use minimum fee',
				hours: 'hour(s)',
				txConfirm: {
					title: 'Confirm Conversion to Multisig Account',
					total: 'Total',

				},
				warning: 'Multisig account is on the list of cosignatories. This will result in locking down the account cutting off access to the fund. most likely you <b>DO NOT</b> want to do that.'
			},
			signMultisig: {
				title: 'Sign multisig transaction',
				original: {
					from: 'Multisig account',
					to: 'Получатель',
					amount: 'Сумма',
					fee: 'Inner Fee',
					deadline: 'Deadline'
				},
				multisigFees: 'Multisig Fees',
				multisigTotal: 'Total',
				sender: 'Cosignatory',
				fee: 'Оплата',
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: 'Due by',
				useMinimumFee: 'Use minimum fee',
				hours: 'hour(s)',
				password: 'Пароль',
				passwordValidation: 'Password must not be blank',
				send: 'Послать',
				cancel: 'Cancel',
				sending: 'Sending...',
				successMessage: 'Транзакция была успешно послана!',
				txConfirm: {
					title: 'Confirm Multisig Transaction',
					message: 'Сообщение',
					encrypted: 'Сообщение Зашифровано',
					noMessage: 'Нет сообщения',

				}
			},
			sendNem: {
				title: 'Послать XEM',
				sender: 'Отправитель',
				thisAccount: 'This account',
				labelDesc: 'Этот аккаунт маркирован как {{1}}',
				nullLabelDesc: "Этот аккаунт не имеет маркировки",
				amount: 'Сумма',
				recipient: "Аккаунт получателя",
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: 'Сообщение',
				encrypt: 'Зашифрованное сообщение',
				fee: 'Оплата',
				multisigFee: 'Multisig fee',
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: 'В течение',
				useMinimumFee: 'Use minimum fee',
				hours: 'часов',
				password: 'Пароль',
				passwordValidation: 'Password must not be blank',
				send: 'Послать',
				cancel: 'Cancel',
				sending: 'Посылается...',
				successMessage: 'Транзакция была успешно послана!',
				txConfirm: {
					title: 'Confirm Transaction',
					amount: 'Amount',
					to: 'To',
					dueBy: 'Due by',
					hours: 'hour(s)',
					total: 'Total',
					message: 'Message',
					encrypted: 'Message is encrypted',
					noMessage: 'No message',
					cancel: 'Cancel',
					confirm: 'Confirm',
					sending: 'Sending...'
				},
				notBootedWarning: {
					title: 'Узел не был загружен!',
					message: 'Вы должны загрузить локальный узел перед тем, как Вы сможете посылать XEM!'
				},
				bootingWarning: {
					title: 'Node is being booted',
					message: 'Please wait until booting process is done to send your transaction.'
				},
				loadingWarning: {
					title: 'Loading db'
				}
			},
			clientInfo: {
				title: 'Client info',
				ncc: 'NEM Community Client - NCC',
				signer: 'Владелец подписи',
				remoteServer: 'Удалённый Сервер',
				local: 'Локальный',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Синхронизирован',
				notSync: 'Не синхронизирован',
				notConnected: 'Не соединён с  NEM Cloud',
				loading: 'Загрузка...'
			},
			transactionDetails: {
				title: 'Детали транзакции',
				id: 'ID',
				hash: 'Хэш',
				type: 'Тип транзакции',
				direction: 'Transaction Direction',
				pending: 'В ожидании',
				outgoing: 'Исходящие',
				incoming: 'Входящие',
				self: 'Авто',
				sender: 'Отправитель',
				multisigAccount: 'Multisig Account',
				issuer: 'Issuer',
				recipient: 'Получатель',
				remote: 'Remote',
				multisigMessage: 'Signatures present',
				message: 'Сообщение',
				noMessage: 'Нет сообщений',
				encrypted: 'Сообщение зашифровано',
				time: 'Время создания',
				confirmations: 'Подтверждения',
				confirmationsUnknown: 'Unknown',
				amount: 'Сумма',
				fee: 'Оплата',
				innerFee: 'Inner Fee',
				multisigFees: 'Multisig Fees',
				cosignatory: 'Cosignatory'
			},
			accountDetails: {
				title: "Account details",
				address: "Address",
				label: "Label",
				noLabel: "No label",
				add: "Add to address book",
				remove: "Remove from address book",
				balance: "Balance",
				vested: "vested",
				importance: "Importance",
				publicKey: "Public key",
				noPublicKey: "No public key",
				harvestedBlocks: "Harvested blocks",
				close: "Close"
			},
			bootLocalNode: {
				title: 'Загрузить как локальный узел',
				account: 'Аккаунт для загрузки в локальный узел',
				noLabel: '<span class="null">&lt;Не маркированный&gt;</span>',
				wallet: 'Кошелёк',
				node: 'Имя узла',
				boot: 'Загрузить',
				booting: 'Загрузка...'
			},
			closeWallet: {
				title: 'Закрыть кошелёк',
				message: 'Вы уверены, что хотите закрыть кошелёк и возвратиться на главную страницу ?'
			},
			createAccount: {
				title: 'Создать аккаунт',
				label: 'Приватная маркировка',
				wallet: 'Кошелёк',
				password: "Пароль кошелька",
				successMessage: 'Аккаунт {{1}} {{#2}}({{2}}){{/2}} был создан!',
				create: 'Создать'
			},
			createRealAccountData: {
				title: 'Create real account data',
				message: 'The below data is for your real account after NEM launches. Save the the address, the public key, and most importantly the private key somewhere safe. If you lose the private key, your account and all your real XEM will be lost FOREVER!',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				confirm: {
					title: 'Save the private key',
					message: 'Are you sure your private key has been saved into a safe place?'
				},
				recheck: {
					title: 'Re-check your saved private key',
					message: "Please re-enter your private key you've just been provided to check if you have the correct one saved. If your private key is already lost, you may want to create a new one.",
					correct: {
						title: 'Nice!',
						message: 'You seem to have your correct private key saved. Please remember to always keep it safe and secured!'
					},
					incorrect: {
						title: 'Hmm...',
						message: "The private key you've just entered is not correct! Please double check and enter it once again.",
						tryAgain: 'Try to enter again',
						seeOriginal: 'See the original data'
					},
					recheck: 'Check'
				},
				ok: 'OK'
			},
			verifyRealAccountData: {
				title: 'Verify real account data',
				message: 'Re-enter your saved address, public key and private key below to check if they match',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				dataMatched: 'Everything seems good, your entered address, public key, and private key match.',
				verify: 'Verify'
			},
			addAccount: {
				title: 'Добавить Существующий Аккаунт',
				privateKey: "Частный Ключ Аккаунта ",
				wallet: 'Кошелёк',
				password: "Пароль Аккаунта",
				successMessage: 'Аккаунт {{1}} {{#2}}({{2}}){{/2}} был добавлен кошелёк!',
				add: 'Добавить',
				label: 'Маркировка'
			},
			setPrimary: {
				title: 'Установить как Главный Аккаунт',
				account: 'Установить аккаунт как Главный',
				noLabel: '<span class="null">&lt;нет маркировки&gt;</span>',
				wallet: 'Кошелёк',
				password: "Пароль кошелька",
				successMessage: 'Аккаунт {{1}} {{#2}}({{2}}){{/2}} был установлен как Главный!',
				set: 'Установлен как главный'
			},
			changeWalletName: {
				title: 'Изменить имя кошелька',
				wallet: 'Текущее имя кошелька',
				newName: 'Новое имя кошелька',
				password: "Пароль кошелька",
				successMessage: 'Имя кошелька было успешно изменено с <em>{{1}}</em> на <em>{{2}}</em>',
				change: 'Изменить'
			},
			changeWalletPassword: {
				title: 'Изменить пароль к  кошельку',
				wallet: 'Кошелёк',
				password: 'Текущий пароль',
				newPassword: 'Новый пароль',
				confirmPassword: 'Подтвердить новый пароль',
				successMessage: 'Пароль от кошелька был успешно изменён',
				change: 'Изменить',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Введённый Вами пароль и подтверждение пароля не совпадают. Пожалуйста убедитесь, что Вы правильно написали новый пароль.'
			},
			changeAccountLabel: {
				title: 'Изменить маркировку аккаунта',
				label: 'Маркировка аккаунта',
				wallet: 'Кошелёк',
				password: "Пароль от кошелька",
				successMessage: 'Аккаунт {{1}} теперь маркирован как {{2}}',
				change: 'Изменить'
			},
			removeAccount: {
				title: 'Удалить аккаунт',
				wallet: 'Кошелёк',
				password: "Пароль от кошелька",
				warning: 'Пожалуйста  убедитесь, что Ваш аккаунт не имеет XEM монет, прежде чем Вы удалите его, или они будут потеряны навсегда.',
				successMessage: 'Аккаунт {{1}} {{#2}}({{2}}){{/2}} был удалён!',
				remove: 'Удалить'
			},
			nisUnavailable: {
				title: 'NIS недоступен',
				message: 'Отключился от NIS, жду подключения'
			},
			shutdown: {
				title: 'Закрыть программу',
				message: 'Вы уверены, что хотите закрыть NEM Community Client?'
			},
			activateRemote: {
				title: 'Activate Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Hours due',
				password: "Wallet's password",
				activate: 'Activate'
			},
			deactivateRemote: {
				title: 'Deactivate Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Hours due',
				password: "Wallet's password",
				deactivate: 'Deactivate'
			},
			startRemote: {
				title: 'Start Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				start: 'Start'
			},
			stopRemote: {
				title: 'Stop Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. emember that if you leave your wallet this way, some others may still be able to access your wallet from this computer.\n\nTo prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Add contact',
				add: 'Добавить'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Сохранить настройки'
			},
			removeContact: {
				title: 'Remove contact',
				remove: 'Удалить'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Кошелёк успешно импортирован!',
			nav: {
				start: 'Введение',
				about: 'О NEM',
				settings: 'Settings'
			},
			main: {
				leftTitle: 'Новичок в <em>NEM</em>?',
				leftButton: 'Создать новый кошелёк',
				walletNamePlh: 'Имя Вашего кошелька',
				passwordPlh: 'Пароль',
				confirmPasswordPlh: 'Confirm password',
				create: 'Создать',
				creating: 'Creating...',
				rightTitle: 'Вы уже <em>NEM</em>ber?',
				rightButton: 'Открыть Ваш кошелёк',
				openButton: 'Открыть',
				walletsFound: 'Найдено <strong>{{1}}</strong> <em>кошелёк</em>',
				copyright: 'Фотография <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC зашифровывает Ваш кошелёк',
						description: '<em>Безопасность!</em> Важнейшая задача NEM состоит в защите Ваших XEM монет и активов.'
					},
					{
						title: 'NCC зашифровывает Ваш кошелёк',
						description: '<em>Безопасность!</em> Важнейшая задача NEM состоит в защите Ваших XEM монет и активов.'
					}
				]
			},
			about: {
				sections: [
					{
						title: 'Как работает NCC?',
						paragraphs: [
							'<strong>NCC</strong>предоставляет доступ к Вашим XEM монетам и активам  как обычный кошелёк. Вы можете',
							'<strong>NCC</strong> требует доступ к<strong>NIS</strong>серверу для корректной работы. Локальный сервер должен быть активный ( устанавливается вместе с <strong>NCC</strong>)',
							'Вы можете сконфигурировать доступ до удалённого  <strong>NIS</strong>.'
						],
						listItems: [
							'Иметь несколько кошельков',
							'Определить несколько аккаунтов, которые будут включены в кошелёк'
						]
					},
					{
						title: 'Что такое &#42;NIS?',
						paragraphs: [
							'Этот компонент отвечает за функционирование <strong>NEM</strong>cloud.',
							'Чем больше <strong>NIS</strong> тем лучше безопасность.',
							'<strong>NIS</strong>это точка доступа в<strong>NEM</strong> cloud.'
						],
						legend: '<strong>&#42;NIS</strong> расшифровывается как <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '© 2015 NEM Community Client.Все права защищены.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Примерно {{1}} дней назад',
			lastAccessJustNow: 'Недавно',
			lastAccessTooltip: 'Последний доступ был {{1}}',
			primary: 'Главный',
			primaryShort: 'Г',
			noLabel: '<Без маркировки>',
			copiedToClipboard: 'Адрес был скопирован в буфер обмена!',
			actions: {
				refreshInfo: 'Обновить информацию',
				bootLocalNode: 'Загрузить Локальный Узел',
				changeWalletName: 'Изменить Имя Кошелька',
				changeWalletPassword: 'Изменить Пароль Кошелька',
				mergeWallets: 'Объединить Кошельки',
				exportWallet: 'Экспорт Кошелька',
				createAccount: 'Создать Новый Аккаунт',
				createRealAccountData: 'Create real account data',
				verifyRealAccountData: 'Verify real account data',
				addAccount: 'Добавить Существующий Аккаунт',
				changeAccountLabel: 'Изменить Маркировку Аккаунта',
				setPrimary: 'Установить как Главный Аккаунт',
				removeAccount: 'Удалить Аккаунт',
				clientInfo: 'Информация о Клиенте',
				closeWallet: 'Закрыть Кошелёк',
				closeProgram: 'Закрыть Программу',
				copyClipboard: 'Скопируйте адрес в буфер обмена',
				convertMultisig: 'Convert to multisig'
			},
			nav: [
				'Панель Управления',
				'Сообщения',
				'Address Book',
				'Транзакции',
				'Собранные Блоки',
				'Обмен Активов',
				'Новости',
				'Приложения',
				'Аккаунты',
				'Настройки',
				'Закрыть Программу'
			],
			bootNodeWarning: "Для полного функционирования NCC  нужно загрузить локальный узел."
		},
		dashboard: {
			assets: {
				title: 'Ваши Активы'
			},
			importance: {
				title: 'Оценка Важности',
				unknown: 'Неизвестный Статус',
				start: 'Начать Сборку',
				harvesting: 'Сборка',
				stop: 'Остановить Сборку',
				description: 'Важность аккаунта для NEM cloud',
				remoteHarvest: {
					activate: 'Activate remote harvesting',
					activating: 'Activating...',
					active: 'Remote harvesting is active',
					deactivate: 'Deactivate remote harvesting',
					deactivating: 'Deactivating...',
					startRemoteHarvesting: 'Start remote harvesting',
					remotelyHarvesting: 'Remotely harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			},
			transactions: {
				title: 'Недавние Транзакции',
				sendNem: 'Послать XEM',
				signMultisig: 'SIGN',
				balance: 'Текущий Баланс',
				vestedBalance: 'Vested Balance',
				syncStatus: '(Блок {{1}}{{#2}} : примерно {{3}} дней{{/2}})',
				unknown: 'неизвестно',
				columns: [
					'',
					'Время',
					'Отправитель/Получатель',
					'Сообщения',
					'',
					'Детали',
					'Подтверждения',
					'Оплата',
					'Сумма'
				],
				noMessage: 'Нет Сообщений',
				encrypted: 'Сообщение Зашифровано',
				view: 'Обзор',
				confirmationsUnknown: 'Unknown',
				pending: 'В ожидании',
				seeAll: 'Посмотреть все транзакции',
				noTransactions: 'Не было сделано ни одной транзакции'
			},
			nemValue: {
				title: 'Статистика XEM'
			},
			messages: {
				titleTooltip: 'Сообщения'
			},
			news: {
				titleTooltip: 'Новости'
			},
			notAvailable: 'Недоступно в Альфа версии'
		},
		transactions: {
			title: 'Транзакции',
			sendNem: 'Послать XEM',
			balance: 'Текущий Баланс',
			filters: {
				confirmed: 'Подтвержденные',
				unconfirmed: 'Неподтверждённых',
				incoming: 'Входящие',
				outgoing: 'Исходящие'
			},
			table: {
				columns: [
					'',
					'Время',
					'Отправитель/Получатель',
					'Сообщение',
					'',
					'Детали',
					'Подтверждения',
					'Оплата',
					'Сумма'
				],
				noMessage: 'Нет сообщения',
				encrypted: 'Сообщение Зашифровано',
				view: 'Обзор',
				confirmationsUnknown: 'Unknown',
				pending: 'В ожидании',
				noTransactions: 'Не было сделано ни одной транзакции',
				loading: 'Показать больше транзакций...'
			}
		},
		harvestedBlocks: {
			title: 'Сгенерированные Блоки',
			feeEarned: 'Вознаграждение за последние 25 сгенерированных блоков',
			unknown: 'Unknown',
			table: {
				columns: [
					'Блок',
					'Время',
					'Хэш  Блока',
					'Оплата'
				],
				noBlocks: 'Нет Сгенерированных Блоков ',
				loading: 'Посмотреть более старые сгенерированные блоки'
			},
			harvesting: {
				unknown: 'Статус Неизвестен',
				start: 'Начать Генерацию',
				harvesting: 'Генерация',
				stop: 'Остановить Генерацию',
				remoteHarvest: {
					startRemoteHarvesting: 'Start remote harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			}
		},
		addressBook: {
			title: 'Address book',
			addContact: 'Add contact',
			table: {
				columns: [
					'Account address',
					'Private Label',
					'Public Label'
				],
				noContacts: 'There is no contacts in your address book'
			},
			noLabel: 'No label',
			sendNem: 'Послать XEM',
			edit: 'Edit',
			remove: 'Удалить'
		},
		settings: {
			title: 'Настройки',
			settings: [
				{
					name: 'Язык'
				}
			],
			save: 'Сохранить настройки',
			saveSuccess: 'Настройки успешно сохранены'
		}
	}
});
