package org.nem.console.commands;

import org.apache.commons.cli.*;
import org.nem.console.models.AliasedKeyPair;
import org.nem.console.utils.*;

import java.util.Collection;

/**
 * A command for dumping the contents of a key pairs file.
 */
public class DumpContentsCommand implements Command {

	@Override
	public String name() {
		return "dump";
	}

	@Override
	public void handle(final CommandLine commandLine) {
		final Collection<AliasedKeyPair> keyPairs = KeyPairsStorage.load(commandLine);
		final boolean showPrivate = Boolean.parseBoolean(commandLine.getOptionValue("showPrivate", "false"));
		final String filter = commandLine.getOptionValue("filter", "");

		for (final AliasedKeyPair keyPair : keyPairs) {
			if (!keyPair.alias().contains(filter)) {
				continue;
			}

			System.out.println(String.format("[%s]", keyPair.alias()));
			System.out.println(String.format("  address: %s", keyPair.address()));
			System.out.println(String.format("   public: %s", keyPair.keyPair().getPublicKey()));
			if (showPrivate) {
				System.out.println(String.format("  private: %s", keyPair.keyPair().getPrivateKey()));
			}
		}
	}

	@Override
	public Options options() {
		final Options options = new Options();
		OptionsUtils.addReadOptions(options);
		options.addOption("showPrivate", true, "The password");
		options.addOption("filter", true, "A filter that will only show details for matching aliases.");
		return options;
	}
}
